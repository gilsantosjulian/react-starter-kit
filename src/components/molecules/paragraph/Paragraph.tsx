import React, { ReactElement, } from 'react';

import Title from 'atoms/title/Title';
import Description from 'atoms/description/Description';
import * as styles from 'moleculesStyles/paragraph/paragraph.scss';

const Paragraph: React.SFC<HeroProps> = (
  { title, description, }
): ReactElement => (
  <div className={styles.container}>
    <Title text={title} />
    <Description text={description} />
  </div>
);

interface HeroProps {
  title: string;
  description: string;
}

export default Paragraph;
