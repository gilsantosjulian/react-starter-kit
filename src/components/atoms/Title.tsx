import React, { ReactElement, } from 'react'
import { FormattedMessage, } from 'react-intl'

import * as styles from 'assets/styles/atoms/title.scss'

const Title: React.SFC<TitleProps> = (
  { text, }
): ReactElement => (
  <h3 className={styles.text}>{<FormattedMessage id={text} defaultMessage={text} />}</h3>
)

interface TitleProps {
  text: string;
}

export default Title
