const log = (
  title: string, data: any, color: string
): void => {
  if (!localStorage.getItem(
    'logger'
  )) return

  console.groupCollapsed(
    `%c ${title}`, `color: ${color}`
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
    title: string, data: any
  ): void => log(
    `${module}:${title}`, data, '#424242'
  ),
  info: (
    title: string, data: any
  ): void => log(
    `${module}:${title}`, data, '#1B98E0'
  ),
  error: (
    title: string, data: any
  ): void => log(
    `${module}:${title}`, data, '#AF1B3F'
  ),
  custom: (
    title: string, data: any, color: string
  ): void => log(
    title, data, color
  ),
})
