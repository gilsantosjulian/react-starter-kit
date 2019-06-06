import React, { ReactElement, } from 'react'

import Paragraph from 'molecules/Paragraph'
import * as styles from 'assets/styles/organisms/centeredParagraph.scss'

const centeredParagraph: React.SFC<CenteredeParagraphProps> = (
  {
    title,
    description,
  }
): ReactElement => (
  <div className={styles.container}>
    <Paragraph title={title} description={description} />
  </div>
)

interface CenteredeParagraphProps {
  title: string;
  description: string;
}

export default centeredParagraph
