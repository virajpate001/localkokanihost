// src/lib/db.js
// MySQL connection pool (replaces src/lib/firebase.js). Server-side only.
import "server-only";
import mysql from "mysql2/promise";

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      dateStrings: false,
    });
  }
  return pool;
}

// Convenience wrapper: mimics the old getDocs-shape helpers closely enough
// that service files barely change.
export async function query(sql, params = []) {
  const [rows] = await getPool().execute(sql, params);
  return rows;
}
