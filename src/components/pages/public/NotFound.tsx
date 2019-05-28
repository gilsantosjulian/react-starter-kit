import React, { ReactElement, } from 'react';

import Centered from 'templates/Centered';
import Error from 'organisms/Error';

const NotFound: React.SFC = (): ReactElement => (
  <Centered>
    <Error title="notfound.txt1" description="notfound.txt2" />
  </Centered>
);

export default NotFound;
