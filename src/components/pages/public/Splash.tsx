import React, { ReactElement, } from 'react';

import CenteredTemplate from 'templates/centeredTemplate/CenteredTemplate';
import Hero from 'molecules/hero/Hero';

const image = require(
  'images/logo.png'
);

const Splash: React.SFC = (): ReactElement => (
  <CenteredTemplate>
    <Hero image={image} text="splash.txt1" />
  </CenteredTemplate>
);

export default Splash;
