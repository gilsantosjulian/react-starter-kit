import React, { ReactElement, } from 'react';

import * as styles from 'atomsStyles/title/title.scss';

const Title: React.SFC<TitleProps> = (
  { text, }
): ReactElement => (
  <h3 className={styles.text}>{text}</h3>
);

interface TitleProps {
  text: string;
}

export default Title;
