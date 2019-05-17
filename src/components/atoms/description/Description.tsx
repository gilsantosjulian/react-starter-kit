import React, { ReactElement, } from 'react';

import * as styles from 'atomsStyles/description/description.scss';

const Description: React.SFC<DescriptionProps> = (
  { text, }
): ReactElement => (
  <h5 className={styles.text}>{text}</h5>
);

interface DescriptionProps {
  text: string;
}

export default Description;
