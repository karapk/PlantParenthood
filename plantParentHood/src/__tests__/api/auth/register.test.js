import { describe, it, expect, vi, beforeEach } from 'vitest';
import handler from '@/pages/api/auth/register';

// --- mocks ---
vi.mock('@/server/prisma', () => ({
  default: {
    user: {
      create: vi.fn(),
    },
  },
}));

vi.mock('bcryptjs', () => ({
  default: {
    hash: vi.fn().mockResolvedValue('hashed_password_123'),
  },
}));

import prisma from '@/server/prisma';
import bcrypt from 'bcryptjs';

// --- helpers ---
function makeReq(method = 'POST', body = {}) {
  return { method, body };
}

function makeRes() {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  };
  return res;
}

// --- tests ---
describe('POST /api/auth/register', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('method validation', () => {
    it('returns 405 for non-POST requests', async () => {
      // Arrange
      const res = makeRes();

      // Act
      await handler(makeReq('GET'), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(405);
      expect(prisma.user.create).not.toHaveBeenCalled();
    });
  });

  describe('input validation', () => {
    it('returns 400 when email is missing', async () => {
      // Arrange
      const res = makeRes();

      // Act
      await handler(makeReq('POST', { password: 'password123' }), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Email and password are required' });
    });

    it('returns 400 when password is missing', async () => {
      // Arrange
      const res = makeRes();

      // Act
      await handler(makeReq('POST', { email: 'user@example.com' }), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Email and password are required' });
    });

    it('returns 400 for an invalid email format', async () => {
      // Arrange
      const res = makeRes();

      // Act
      await handler(makeReq('POST', { email: 'not-an-email', password: 'password123' }), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid email address' });
    });

    it('returns 400 when password is shorter than 8 characters', async () => {
      // Arrange
      const res = makeRes();

      // Act
      await handler(makeReq('POST', { email: 'user@example.com', password: 'short' }), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Password must be at least 8 characters' });
    });
  });

  describe('successful registration', () => {
    it('creates a user and returns 201 without the password field', async () => {
      // Arrange
      const createdUser = {
        id: 'uuid-123',
        email: 'user@example.com',
        name: 'Test User',
        createdAt: new Date(),
      };
      prisma.user.create.mockResolvedValue(createdUser);
      const res = makeRes();

      // Act
      await handler(
        makeReq('POST', { email: 'user@example.com', password: 'password123', name: 'Test User' }),
        res
      );

      // Assert
      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: { email: 'user@example.com', password: 'hashed_password_123', name: 'Test User' },
        select: { id: true, email: true, name: true, createdAt: true },
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ user: createdUser });
    });

    it('allows registration without an optional name', async () => {
      // Arrange
      prisma.user.create.mockResolvedValue({ id: 'uuid-456', email: 'user@example.com', name: null, createdAt: new Date() });
      const res = makeRes();

      // Act
      await handler(makeReq('POST', { email: 'user@example.com', password: 'password123' }), res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe('error handling', () => {
    it('returns 409 when the email is already registered', async () => {
      // Arrange
      const duplicateError = new Error('Unique constraint failed');
      duplicateError.code = 'P2002';
      prisma.user.create.mockRejectedValue(duplicateError);
      const res = makeRes();

      // Act
      await handler(
        makeReq('POST', { email: 'existing@example.com', password: 'password123' }),
        res
      );

      // Assert
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ error: 'An account with this email already exists' });
    });

    it('returns 500 for unexpected database errors', async () => {
      // Arrange
      prisma.user.create.mockRejectedValue(new Error('Unexpected DB error'));
      const res = makeRes();

      // Act
      await handler(
        makeReq('POST', { email: 'user@example.com', password: 'password123' }),
        res
      );

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
    });
  });
});
