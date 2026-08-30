/**
 * Format a scaled numerical amount into a human-friendly cooking fraction or clean decimal
 */
export function formatFraction(amount: number): string {
  if (amount <= 0) return '0';

  const whole = Math.floor(amount);
  const remainder = amount - whole;

  // Common culinary fraction thresholds
  const fractions: [number, string][] = [
    [0.125, '1/8'],
    [0.25, '1/4'],
    [0.333, '1/3'],
    [0.5, '1/2'],
    [0.666, '2/3'],
    [0.75, '3/4'],
    [0.875, '7/8']
  ];

  for (const [val, str] of fractions) {
    if (Math.abs(remainder - val) < 0.05) {
      if (whole === 0) return str;
      return `${whole} ${str}`;
    }
  }

  // If close to whole number
  if (Math.abs(remainder - 1) < 0.05) {
    return `${whole + 1}`;
  }
  if (remainder < 0.05) {
    return `${whole}`;
  }

  // Fallback to clean 1 decimal place
  return (Math.round(amount * 10) / 10).toString();
}

/**
 * Scale an ingredient quantity based on base servings and target servings
 */
export function scaleIngredientQuantity(
  baseAmount: number,
  baseServings: number,
  targetServings: number
): { scaledAmount: number; formatted: string } {
  if (!baseAmount || baseServings <= 0 || targetServings <= 0) {
    return { scaledAmount: baseAmount, formatted: baseAmount.toString() };
  }

  const factor = targetServings / baseServings;
  const scaledAmount = baseAmount * factor;
  const formatted = formatFraction(scaledAmount);

  return { scaledAmount, formatted };
}
