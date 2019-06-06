import { addLocaleData, } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'

import spanish from 'strings/es.json'
import english from 'strings/en.json'
import Languages from 'types/languages'

addLocaleData(
  [ ...en, ...es, ]
)

export const getLanguage = (): string => {
  const languagesEnables = [ 'en', 'es', ]
  const language = navigator.language.split(
    /[-_]/
  )[0]

  return languagesEnables.includes(
    language
  ) ? language : 'en'
}

export const getMessage = (): object => {
  const messages: Languages = {
    es: spanish,
    en: english,
  }

  return messages[getLanguage()]
}
