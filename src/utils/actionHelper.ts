export default (
  type: string,
  payload?: object,
  error?: boolean,
  meta?: object,
): object => ({
  type,
  payload,
  error,
  meta,
})
