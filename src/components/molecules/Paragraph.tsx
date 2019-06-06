import React, { ReactElement, } from 'react'

import Title from 'atoms/Title'
import Description from 'atoms/Description'
import * as styles from 'assets/styles/molecules/paragraph.scss'

const Paragraph: React.SFC<ParagraphProps> = (
  { title, description, }
): ReactElement => (
  <div className={styles.container}>
    <Title textId={title} />
    <Description textId={description} />
  </div>
)

interface ParagraphProps {
  title: string;
  description: string;
}

export default Paragraph
