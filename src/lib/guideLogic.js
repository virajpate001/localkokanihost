// src/lib/guideLogic.js
//
// Pure helpers shared by the SEO guide pages. No React, no database, no
// "use server" — so it can be imported from Server Components, Client
// Components and unit tests alike. All the "what does this widget say / do"
// rules live here; the components only render.

// ───────── Stay matching / display ─────────

// A "rule" is declarative data from a content file:
//   { all: true }                    → everything
//   { fact: "pool", is: "private" }  → fact strictly equals a value
//   { fact: "tags", has: "beach" }   → array fact contains a value
//   { fact: "pool" }                 → fact is present (not null/false)
export function matchRule(stay, rule) {
  if (!rule || rule.all) return true;
  const value = stay.facts?.[rule.fact];
  if ("is" in rule) return value === rule.is;
  if ("has" in rule) return Array.isArray(value) && value.includes(rule.has);
  return value !== null && value !== undefined && value !== false;
}

// Server-side "which hotels belong on this page" rule.
//   { all: true } | { fact } | { premium: true } | { anyFact: ["a", "b"] }
export function selectStays(stays, include = { all: true }) {
  if (include.all) return stays;
  if (include.premium) return stays.filter((s) => s.facts?.premium === true);
  if (include.anyFact) {
    return stays.filter((s) => include.anyFact.some((f) => s.facts?.[f] === true));
  }
  return stays.filter((s) => matchRule(s, include));
}

export function chipLabels(stay, chips = []) {
  const out = [];
  for (const chip of chips) {
    if (matchRule(stay, chip) && !out.includes(chip.label)) out.push(chip.label);
  }
  return out;
}

export function lineLabel(stay, line) {
  if (!line) return null;
  if (line.town) return stay.town ? `${stay.town}, Konkan` : "Konkan";
  const value = stay.facts?.[line.fact];
  return line.labels?.[value] || line.fallback || null;
}

export function sortStays(stays, sort) {
  if (!sort) return stays;
  const rank = (s) => {
    const i = sort.order.indexOf(s.facts?.[sort.fact]);
    return i === -1 ? sort.order.length : i;
  };
  return [...stays].sort((a, b) => rank(a) - rank(b));
}

export function formatPrice(price) {
  if (!price) return "Ask for rates on WhatsApp";
  return `From \u20B9${Number(price).toLocaleString("en-IN")} per night`;
}

// ───────── WhatsApp ─────────

export function waLink(number, message) {
  const digits = String(number || "").replace(/\D/g, "");
  const text = encodeURIComponent(message || "");
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function fillTemplate(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : `{${k}}`));
}

// `message` is either a string template, or { head, extra: [{fact,is,text}], tail }.
export function buildStayMessage(message, stay, site) {
  const vars = { name: stay.name, site };
  if (typeof message === "string") return fillTemplate(message, vars);
  const extra = (message.extra || [])
    .filter((e) => matchRule(stay, e))
    .map((e) => e.text)
    .join("");
  return fillTemplate(message.head, vars) + extra + message.tail;
}

// ───────── "Questions to ask" builder (beach page) ─────────

export function builderMessage({ hotel = "", dates = "", guests = "", questions = [], site }) {
  const lines = [`Hi, I found ${hotel.trim() || "your hotel"} on ${site}.`];
  const details = [];
  if (dates.trim()) details.push(`Dates: ${dates.trim()}`);
  if (guests.trim()) details.push(`Guests: ${guests.trim()}`);
  if (details.length) lines.push(details.join(". ") + ".");
  if (questions.length) {
    lines.push("Could you please tell me:");
    questions.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  } else {
    lines.push("Could you please share availability and rates?");
  }
  lines.push("Thank you.");
  return lines.join("\n");
}

// ───────── Family planner ─────────

export function planFamily({ adults, kids, age, hotel = "", site, luxuryLive = false }) {
  const total = adults + kids;
  const qs = [];
  qs.push(
    `Does the room take ${total} guests comfortably` +
      (kids > 0 ? ", and do children count towards the room's capacity?" : "?")
  );
  if (kids > 0) {
    if (age === "infant") qs.push("Can you provide a cot or baby bed, and is it free?");
    else if (age === "child") qs.push("Is an extra bed or mattress available for the children, and what does it cost?");
    else qs.push("From what age are children charged as adults for the room and meals?");
    qs.push("Are children's meals or smaller portions available, and how early is dinner served?");
    qs.push("What is the walking time to the beach, and is the route safe with children?");
    qs.push("If there is a pool, how deep is it, is it fenced, and what are the supervision rules?");
  } else {
    qs.push("What is the walking time to the beach?");
  }
  if (total >= 5) qs.push("Do you have a family suite or two connecting rooms, or a villa for our group?");
  qs.push("What is included in the price, and what is your cancellation policy?");

  const head =
    `Hi, I found ${hotel.trim() || "your hotel"} on ${site}. We are ${adults}` +
    (adults === 1 ? " adult" : " adults") +
    (kids > 0 ? ` and ${kids}${kids === 1 ? " child" : " children"}` : "") +
    ". Dates: ___ .";
  const lines = [head, "Could you please tell me:"];
  qs.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  lines.push("Thank you.");

  return {
    total,
    questions: qs,
    groupNote: total >= 5 ? { total, linkLive: luxuryLive } : null,
    message: lines.join("\n"),
  };
}

// ───────── Turtle claim checker ─────────

export function claimVerdict(positiveCount, redCount, verdicts) {
  if (redCount > 0) return { kind: "bad", text: verdicts.bad };
  if (positiveCount >= 4) return { kind: "good", text: verdicts.good };
  if (positiveCount >= 2) return { kind: "mid", text: verdicts.mid };
  return { kind: "none", text: verdicts.none };
}

export function claimMessage(message, { hotel = "", site }) {
  const lines = [fillTemplate(message.intro, { hotel: hotel.trim() || "your hotel", site })];
  message.questions.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  lines.push(message.outro);
  return lines.join("\n");
}

// ───────── Pool finder ─────────

export function finderResult({ who, privacy }, results) {
  const wantPrivate = privacy === "private";
  const kids = who === "children";
  let text;
  if (wantPrivate && kids) text = results.privateKids;
  else if (wantPrivate) text = results.private;
  else if (kids) text = results.kids;
  else text = results.shared;
  return { text, filter: wantPrivate ? "private" : kids ? "kids" : "all" };
}

// ───────── Markdown → plain text (for FAQ structured data) ─────────

export function mdToPlain(md = "") {
  return md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\\([\\`*_{}[\]()#+\-.!|<>~])/g, "$1")
    .replace(/\s*\n+\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}