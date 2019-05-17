import React, { ReactElement, } from 'react';

import ErrorTemplate from 'templates/errorTemplate/ErrorTemplate';
import Error from 'organisms/error/Error';

const NotFound: React.SFC = (): ReactElement => (
  <ErrorTemplate>
    <Error
      title="Not found 404"
      description="The resource did not found, maybe you wrote a bad url"
    />
  </ErrorTemplate>
);

export default NotFound;
