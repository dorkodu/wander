function parseNumber(variable: string | undefined) {
  if (variable === undefined) return false;
  return parseInt(variable);
}

export const util = {
  parseNumber,
}