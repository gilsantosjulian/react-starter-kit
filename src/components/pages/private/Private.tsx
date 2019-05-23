import React, { ReactElement, } from 'react';
import ServicesSection from 'templates/ServicesSection';

import { textDanger, } from 'privateViewsStyles/private.scss';

const Private: React.SFC = (): ReactElement => (
  <div className={textDanger}>
    <ServicesSection
      title="What we do"
      subtitle={`
        Having and managing a correct marketing strategy 
        is crucial in a fast moving market.
      `}
    />
  </div>
);

export default Private;
