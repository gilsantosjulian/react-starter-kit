import React, { Suspense, } from 'react';
import ReactDOM from 'react-dom';
import { Router, View, } from 'react-navi';

import getRoutes from 'config/routes';

const rootElement = document.getElementById(
  'root'
);

getRoutes().then(
  (
    routes
  ) => {
    ReactDOM.render(
      <Suspense fallback={null}>
        <Router routes={routes}>
          <View />
        </Router>
      </Suspense>,
      rootElement,
    );
  }
);
