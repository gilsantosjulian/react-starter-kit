import React, { ReactElement, ReactNode, } from 'react'

import * as styles from 'assets/styles/templates/centered.scss'

const CenteredTemplate: React.SFC<CenteredTemplateProps> = (
  {
    children,
  }
): ReactElement => <div className={styles.container}>{children}</div>

interface CenteredTemplateProps {
  children: ReactNode;
}

export default CenteredTemplate
