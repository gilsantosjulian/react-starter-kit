import React, { ReactElement, SFC, } from 'react';

import * as styles from 'assets/styles/atoms/circleImage.scss';

const Image: SFC<ImageProps> = (
  { src, alt, }
): ReactElement => (
  <img className={styles.image} src={src} alt={alt} />
);

interface ImageProps {
  src: string;
  alt: string;
}

export default Image;
