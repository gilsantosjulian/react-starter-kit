import React, { ReactElement, } from 'react';

import Description from 'atoms/Description';
import SmallImage from 'atoms/SmallImage';
import * as styles from 'assets/styles/molecules/hero.scss';

const Hero: React.SFC<HeroProps> = (
  { image, textId, text, }
): ReactElement => (
  <div className={styles.container}>
    <SmallImage image={image} />
    {textId ? <Description textId={textId} /> : <Description text={text} />}
  </div>
);

interface HeroProps {
  image: string;
  textId?: string;
  text?: string;
}

export default Hero;
