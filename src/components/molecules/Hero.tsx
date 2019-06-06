import React, { ReactElement, } from 'react'

import Description from 'atoms/Description'
import SmallImage from 'atoms/SmallImage'
import * as styles from 'assets/styles/molecules/hero.scss'

const Hero: React.SFC<HeroProps> = (
  { image, text, }
): ReactElement => (
  <div className={styles.container}>
    <SmallImage image={image} />
    <Description text={text} />
  </div>
)

interface HeroProps {
  image: string;
  text: string;
}

export default Hero
