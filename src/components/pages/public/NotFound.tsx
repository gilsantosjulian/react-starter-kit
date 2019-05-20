import React, { ReactElement, } from 'react';

import CenteredTemplate from 'templates/centeredTemplate/CenteredTemplate';
import Error from 'organisms/error/Error';

const NotFound: React.SFC = (): ReactElement => (
  <CenteredTemplate>
    <Error title="notfound.txt1" description="notfound.txt2" />
  </CenteredTemplate>
);

export default NotFound;
