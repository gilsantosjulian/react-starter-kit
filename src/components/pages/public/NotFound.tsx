import React, { ReactElement, } from 'react';

import ErrorTemplate from 'templates/errorTemplate/ErrorTemplate';
import Error from 'organisms/error/Error';

const NotFound: React.SFC = (): ReactElement => (
  <ErrorTemplate>
    <Error title="notfound.txt1" description="notfound.txt2" />
  </ErrorTemplate>
);

export default NotFound;
