export function formatDate(isoTimestamp: string): string {
  const date = new Date(isoTimestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${month}/${day}/${year}`
}
