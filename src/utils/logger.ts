const log = (
  text: string, data: any, color: string
): void => {
  if (!localStorage.getItem(
    'logger'
  )) return

  console.groupCollapsed(
    `%c ${text}`, `color: ${color}`
  )
  console.dir(
    data
  )
  console.groupEnd()
}

module.exports = (
  module: string
): object => ({
  debug: (
    text: string, data: any
  ): void => log(
    `${module}:${text}`, data, '#424242'
  ),
  info: (
    text: string, data: any
  ): void => log(
    `${module}:${text}`, data, '#1B98E0'
  ),
  error: (
    text: string, data: any
  ): void => log(
    `${module}:${text}`, data, '#AF1B3F'
  ),
  custom: (
    text: string, data: any, color: string
  ): void => log(
    text, data, color
  ),
})
