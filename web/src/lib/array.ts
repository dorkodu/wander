function getAnchor(arr: number[], type: "newer" | "older", refresh?: boolean): number {
  if (!arr.length || refresh) return -1;
  const out = type === "newer" ? arr[0] : arr[arr.length - 1];
  return out === undefined ? -1 : out;
}

function sort(arr: number[]) {
  return [... new Set(arr)].sort((a, b) => (b - a));
}

export const array = {
  getAnchor,
  sort,
}