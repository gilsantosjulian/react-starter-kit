import React from 'react';
import { mount, route } from 'navi'

import Home from 'views/Home';
import Another from 'views/Another';

export default mount({
  '/': route({
    title: 'Home',
    view: <Home />,
  }),
  '/another': route({
    title: 'Another',
    view: <Another />,
  })
});
