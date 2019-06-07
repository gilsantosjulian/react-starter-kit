import React, { ReactElement, } from 'react'
import { FormattedMessage, } from 'react-intl'

import * as styles from 'assets/styles/atoms/description.scss'

const Description: React.SFC<DescriptionProps> = (
  { text, }
): ReactElement => (
  <h5 className={styles.text}>{<FormattedMessage id={text} defaultMessage={text} />}</h5>
)

interface DescriptionProps {
  text: string;
}

export default Description
