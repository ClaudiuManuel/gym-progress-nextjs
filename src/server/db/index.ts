import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '@/env';
import * as schema from './schema';

const databaseUrl = env.DATABASE_URL;
const sql = neon(databaseUrl);

export const db = drizzle(sql, { schema });
