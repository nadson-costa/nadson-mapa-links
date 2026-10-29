export function localize(field, language) {
  if (typeof field === 'string') return field
  return field[language] ?? field.pt
}
