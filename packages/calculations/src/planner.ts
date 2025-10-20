export function planNightOut({ startHour, drinks, feedEveryHours }: { startHour: number; drinks: number; feedEveryHours: number; }) {
  const safeAfterHours = drinks * 2 + 1;
  const resumeHour = startHour + safeAfterHours;
  const bottlesNeeded = Math.ceil(safeAfterHours / feedEveryHours);
  return { resumeHour, bottlesNeeded };
}
