export function bottlesForHoursAway(hoursAway: number, bottleOz = 4) {
  const bottles = Math.ceil(hoursAway / 3);
  return { bottles, perBottleOz: bottleOz };
}
