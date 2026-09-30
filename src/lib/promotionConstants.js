// src/lib/promotionConstants.js
// Plain constants/helpers with no DB access — safe to import directly into
// Client Components. Split out of promotionService.js because a "use server"
// actions file may only export async functions.
export const DURATIONS = [
  { key: "week1", label: "1 Week", days: 7 },
  { key: "week2", label: "2 Weeks", days: 14 },
  { key: "week3", label: "3 Weeks", days: 21 },
  { key: "month1", label: "1 Month", days: 30 },
];

export function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}
