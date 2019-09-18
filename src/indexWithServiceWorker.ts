import(
  './index'
)

if ('serviceWorker' in navigator) {
  window.addEventListener(
    'load',
    (): void => {
      navigator.serviceWorker
        .register(
          '/serviceWorker.js'
        )
        .then(
          (
            registration
          ): void => {
            console.log(
              'Service workers registered: ', registration
            )
          },
        )
        .catch(
          (
            registrationError
          ): void => {
            console.log(
              'Service workers registration failed: ', registrationError
            )
          },
        )
    },
  )
}
