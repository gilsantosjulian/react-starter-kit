import React from 'react';
import { mount, route, } from 'navi';
import Home from '../views/Home';

export default mount({
  '/': route({
    title: 'Home',
    view: <Home
      compiler="typescript"
      framework="react"
    />,
  }),
});
