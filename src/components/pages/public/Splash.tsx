import React, { ReactElement, } from 'react';

import Centered from 'templates/Centered';
import Hero from 'molecules/Hero';

const image = require(
  'images/logo.png'
);

const Splash: React.SFC = (): ReactElement => (
  <Centered>
    <Hero image={image} text="splash.txt1" />
  </Centered>
);

export default Splash;
