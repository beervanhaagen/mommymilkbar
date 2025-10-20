export function hoursUntilSafe(drinks: number, hoursSince: number) {
  const needed = drinks * 2 + 1; // conservative: 2h per drink + 1h buffer
  return Math.max(0, needed - hoursSince);
}
