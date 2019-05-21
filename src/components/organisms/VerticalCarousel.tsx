import React, { ReactElement, } from 'react';

import Hero from 'molecules/Hero';
import * as styles from 'organismsStyles/verticalCarousel.scss';

const VerticalCarousel: React.SFC<VerticalCarouselProps> = (
  {
    data,
    imageKey,
    labelKey,
  }
): ReactElement => (
  <div className={styles.container}>
    {data.map(
      (
        item
      ): ReactElement => (
        <Hero key={item[labelKey]} image={item[imageKey]} text={item[labelKey]} />
      ),
    )}
  </div>
);

interface VerticalCarouselProps {
  data: object[];
  imageKey: string;
  labelKey: string;
}

export default VerticalCarousel;
