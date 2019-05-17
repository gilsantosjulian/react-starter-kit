import React, { ReactElement, } from 'react';

import Hero from 'molecules/hero/Hero';
import Paragraph from 'molecules/paragraph/Paragraph';
import * as styles from 'organismsStyles/error/error.scss';

import image from 'images/logo.png';

const Error: React.SFC<ErrorProps> = (
  { title, description, }
): ReactElement => (
  <div className={styles.container}>
    <Hero
      image={image}
      text="Starter kit which contains React, Navi, Typescript, Webpack, Eslint, etc"
    />
    <Paragraph title={title} description={description} />
  </div>
);

interface ErrorProps {
  title: string;
  description: string;
}

export default Error;
