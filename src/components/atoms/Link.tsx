import React, { ReactElement, } from 'react'
import { FormattedMessage, } from 'react-intl'

import * as styles from 'assets/styles/atoms/link.scss'

const Link: React.SFC<LinkProps> = (
  { href, title, }
): ReactElement => (
  <a className={styles.a} href={href} title={title}>
    <FormattedMessage id={title} defaultMessage={title} />
  </a>
)

interface LinkProps {
  title: string;
  href: string;
}

export default Link
