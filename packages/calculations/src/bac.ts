export function estimateBAC(alcoholGrams: number, weightKg: number, r = 0.55) {
  const bac = (alcoholGrams / (weightKg * 1000 * r)) * 100;
  return Math.max(0, bac);
}
