export function formatLKR(amount: number): string {
  const rounded = Math.round(amount);
  return `LKR ${rounded.toLocaleString("en-US")}`;
}

export function getTodayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDaysISO(dateISO: string, days: number): string {
  const parts = dateISO.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return getTodayISO();
  }
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  date.setUTCDate(date.getUTCDate() + days);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function diffDaysISO(startISO: string, endISO: string): number {
  const startParts = startISO.split("-").map(Number);
  const endParts = endISO.split("-").map(Number);
  if (
    startParts.length !== 3 ||
    endParts.length !== 3 ||
    startParts.some(Number.isNaN) ||
    endParts.some(Number.isNaN)
  ) {
    return 1;
  }
  const startUTC = Date.UTC(startParts[0], startParts[1] - 1, startParts[2]);
  const endUTC = Date.UTC(endParts[0], endParts[1] - 1, endParts[2]);
  const msPerDay = 86_400_000;
  return Math.round((endUTC - startUTC) / msPerDay);
}

export function generateInvoiceNumber(dateISO: string): string {
  const clean = dateISO.replace(/-/g, "").slice(0, 8) || "20260101";
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CGH-${clean}-${rand}`;
}
