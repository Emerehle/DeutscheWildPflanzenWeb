import { Pool } from 'pg';

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default db;
