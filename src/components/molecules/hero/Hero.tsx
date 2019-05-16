import React, { ReactElement, } from 'react';

import Description from 'atoms/description/Description';
import SmallImage from 'atoms/smallImage/SmallImage';
import * as styles from 'assets/styles/molecules/hero/hero.scss';

const Hero: React.SFC<HeroProps> = (
  { image, text, }
): ReactElement => (
  <div className={styles.container}>
    <SmallImage image={image} />
    <Description textId={text} />
  </div>
);

interface HeroProps {
  image: string;
  text: string;
}

export default Hero;
