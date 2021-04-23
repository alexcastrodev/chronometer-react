export default function allTrim(val: string | number): string {
  if (val === undefined) {
    throw new TypeError('The first parameter cannot be undefined')
  }

  return String(val)
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/, '')
}
