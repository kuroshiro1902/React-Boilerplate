export function decimalRound(value: number, precision?: number) {
  return +value.toFixed(precision ?? 0);
}
