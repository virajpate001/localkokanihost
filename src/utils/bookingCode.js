// Shared (client + server) helpers for the enquiry reference code, e.g. "LK-7QH3MX".
// Alphabet skips look-alike characters (0/O, 1/I/L).
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 6;

export const BOOKING_CODE_REGEX = /^LK-[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;

export function generateBookingCode() {
  const bytes = new Uint8Array(CODE_LENGTH);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < CODE_LENGTH; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  let out = "";
  for (let i = 0; i < CODE_LENGTH; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return `LK-${out}`;
}

export function normalizeBookingCode(input) {
  return String(input || "").trim().toUpperCase().replace(/\s+/g, "");
}

export function isValidBookingCode(input) {
  return BOOKING_CODE_REGEX.test(normalizeBookingCode(input));
}