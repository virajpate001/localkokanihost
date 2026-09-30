# Deploying Local Kokani to Hostinger (Business plan)

This app now runs on **MySQL + local disk storage** instead of Firebase +
Cloudinary, so everything it needs is included in Hostinger's Business plan:
a Node.js app slot and a MySQL database.

## 1. Create the database

hPanel → **Databases → MySQL Databases** → create a database and a user,
grant that user ALL PRIVILEGES on the database. Note down:
- Database name (looks like `u123456789_localkokani`)
- Username (looks like `u123456789_lk`)
- Password
- Host (usually `localhost`)

Then import the schema: hPanel → **Databases → phpMyAdmin** → select your
database → **Import** → choose `db/schema.sql` → Go.
(Or via SSH: `mysql -u USER -p DBNAME < db/schema.sql`)

## 2. Create the Node.js app

hPanel → **Advanced → Node.js** → Create application.
- Node.js version: 20 or later
- Application root: the folder you upload this project into
- Application startup file: leave as suggested, or set the startup command to `npm run start`
- Application mode: Production

## 3. Set environment variables

In the same Node.js app screen, add environment variables (copy from `.env.example`):

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=u123456789_lk
DB_PASSWORD=your-db-password
DB_NAME=u123456789_localkokani
SESSION_SECRET=<generate with: openssl rand -base64 32>
CRON_SECRET=<any random string>
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

## 4. Upload the code & install

Upload the project (excluding `node_modules` and `.next` — Hostinger will
build fresh) via Git, File Manager zip upload, or SFTP. Then in the Node.js
app's **Run NPM Install** button (or via SSH terminal):

```
npm install
npm run build
```

## 5. Create your first admin login

There's no Firebase console anymore, so you create the admin account
directly via a script (run once, via the hPanel SSH terminal in your app
folder):

```
npm run create-admin -- you@example.com "YourStrongPassword123" "Your Name"
```

You can now log in at `https://www.yourdomain.com/admin/login`.

## 6. Start the app

Use the "Restart" button in the Node.js app panel, or `npm run start` via
SSH. Hostinger's reverse proxy routes your domain to the Node.js app's port
automatically.

## 7. Set up the daily promotion cron job

hPanel → **Advanced → Cron Jobs** → Add new cron job:
- Schedule: once daily (e.g. `0 0 * * *`)
- Command:
  ```
  curl -s -H "Authorization: Bearer YOUR_CRON_SECRET" https://www.yourdomain.com/api/cron/process-promotions
  ```
  (use the same value you set for `CRON_SECRET`)

This replaces the old `vercel.json` cron config, which only worked on Vercel.

## 8. Uploaded images

Property/blog images are saved to `public/uploads/` on the server's own
disk — no third-party image service needed. Make sure this folder is
writable by the Node.js process (it is, by default, in your own app folder)
and is **included in your backups** (hPanel → Backups), since it now holds
real user-uploaded content that isn't stored anywhere else.

## Notes

- No data migration step is needed — you're entering all content freshly
  through the admin panel, which now writes straight to MySQL.
- `sharp` is included as a dependency so Next.js can optimize images on the
  server at request time (Hostinger's Node hosting supports this).
