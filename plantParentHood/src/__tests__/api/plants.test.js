import { describe, it, expect, vi, beforeEach } from 'vitest';
import handler from '@/pages/api/plants';

// --- mocks ---
vi.mock('@/server/prisma', () => ({
  default: {
    plants: {
      findMany: vi.fn(),
    },
  },
}));

import prisma from '@/server/prisma';

// --- helpers ---
function makeReq(method = 'GET', query = {}) {
  return { method, query };
}

function makeRes() {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  };
  return res;
}

// --- tests ---
describe('GET /api/plants', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns all plants when no type filter is provided', async () => {
    // Arrange
    const mockPlants = [
      { id: 1, name: 'Rose', isOutdoor: true },
      { id: 2, name: 'Fern', isOutdoor: false },
    ];
    prisma.plants.findMany.mockResolvedValue(mockPlants);

    // Act
    await handler(makeReq('GET', {}), makeRes());
    const res = makeRes();
    await handler(makeReq('GET', {}), res);

    // Assert
    expect(prisma.plants.findMany).toHaveBeenCalledWith({ where: {} });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockPlants);
  });

  it('filters by isOutdoor=false when ?type=indoor', async () => {
    // Arrange
    const mockIndoorPlants = [{ id: 2, name: 'Fern', isOutdoor: false }];
    prisma.plants.findMany.mockResolvedValue(mockIndoorPlants);
    const res = makeRes();

    // Act
    await handler(makeReq('GET', { type: 'indoor' }), res);

    // Assert
    expect(prisma.plants.findMany).toHaveBeenCalledWith({ where: { isOutdoor: false } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockIndoorPlants);
  });

  it('filters by isOutdoor=true when ?type=outdoor', async () => {
    // Arrange
    const mockOutdoorPlants = [{ id: 1, name: 'Rose', isOutdoor: true }];
    prisma.plants.findMany.mockResolvedValue(mockOutdoorPlants);
    const res = makeRes();

    // Act
    await handler(makeReq('GET', { type: 'outdoor' }), res);

    // Assert
    expect(prisma.plants.findMany).toHaveBeenCalledWith({ where: { isOutdoor: true } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockOutdoorPlants);
  });

  it('returns 405 for non-GET requests', async () => {
    // Arrange
    const res = makeRes();

    // Act
    await handler(makeReq('POST'), res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(405);
    expect(prisma.plants.findMany).not.toHaveBeenCalled();
  });

  it('returns 500 when the database throws', async () => {
    // Arrange
    prisma.plants.findMany.mockRejectedValue(new Error('DB connection failed'));
    const res = makeRes();

    // Act
    await handler(makeReq('GET', {}), res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Failed to fetch plants' });
  });
});
