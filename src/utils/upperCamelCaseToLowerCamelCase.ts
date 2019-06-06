export default (
  word: string
): string => word.replace(
  /([A-Z])/g,
  (
    match, another, index
  ): string => (index === 0 ? match.toLowerCase() : match),
)
