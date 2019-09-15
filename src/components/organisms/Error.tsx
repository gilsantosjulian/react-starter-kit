import React, { ReactElement, } from 'react'

import Hero from 'molecules/Hero'
import Paragraph from 'molecules/Paragraph'
import * as styles from 'assets/styles/organisms/error.scss'

const image = require(
  'images/logo.svg'
)

const Error: React.SFC<ErrorProps> = (
  { title, description, }
): ReactElement => (
  <div className={styles.container}>
    <Hero image={image} text="error.txt1" />
    <Paragraph title={title} description={description} />
  </div>
)

interface ErrorProps {
  title: string;
  description: string;
}

export default Error
