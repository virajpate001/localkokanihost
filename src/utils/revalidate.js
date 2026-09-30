// src/utils/revalidate.js
// The admin session is an httpOnly cookie now, so it's sent automatically
// with same-origin requests — no bearer token to fetch or attach.
export async function triggerRevalidation(paths, tags = ["search-index"]) {
  try {
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ paths, tags }),
    });
  } catch (error) {
    console.error("Failed to trigger revalidation:", error);
  }
}
