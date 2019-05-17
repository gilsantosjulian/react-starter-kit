import React, { ReactElement, } from 'react';

import * as styles from 'atomsStyles/smallImage/smallImage.scss';

const SmallImage: React.SFC<SmallImageProps> = (
  { image, }
): ReactElement => (
  <img alt="" className={styles.image} src={image} />
);

interface SmallImageProps {
  image: string;
}

export default SmallImage;
