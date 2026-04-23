/**
 * Central environment variable config.
 *
 * All required env vars are validated here at module load time.
 * If any are missing the process exits immediately with a clear message
 * rather than failing silently at request time.
 *
 * Usage: import { env } from '@/config/env'
 */

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  databaseUrl: requireEnv('DATABASE_URL'),
  jwtSecret: requireEnv('JWT_SECRET'),
  trefleApiKey: requireEnv('TREFLE_API_KEY'),
};
