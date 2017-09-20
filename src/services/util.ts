export function range (length: number|string) {
  if (typeof length === 'string') {
    length = parseInt(length)
  }
  return Array(length).fill(0).map((x, i) => i)
}