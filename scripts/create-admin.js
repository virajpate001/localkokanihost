// scripts/create-admin.js
// Run once to create your first admin login (there's no Firebase console anymore).
//   node scripts/create-admin.js you@example.com "YourPassword123"

const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const { randomUUID } = require("crypto");

async function main() {
  const [, , email, password, name] = process.argv;
  if (!email || !password) {
    console.log('Usage: node scripts/create-admin.js you@example.com "YourPassword123" "Your Name"');
    process.exit(1);
  }

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const cleanEmail = email.trim().toLowerCase();
  const [existing] = await pool.execute("SELECT id FROM admins WHERE email = ?", [cleanEmail]);
  if (existing.length) {
    console.log(`An admin with ${cleanEmail} already exists. Delete that row first if you want to reset the password.`);
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const id = randomUUID();
  const now = new Date().toISOString().slice(0, 19).replace("T", " ");

  await pool.execute(
    "INSERT INTO admins (id, email, passwordHash, name, createdAt) VALUES (?, ?, ?, ?, ?)",
    [id, cleanEmail, passwordHash, name || "Admin", now]
  );

  console.log(`✅ Admin created: ${cleanEmail}`);
  await pool.end();
}

main().catch((err) => {
  console.error("Failed to create admin:", err.message);
  process.exit(1);
});
