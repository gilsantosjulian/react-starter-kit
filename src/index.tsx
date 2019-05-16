import React, { Suspense, ReactElement, } from 'react';
import ReactDOM from 'react-dom';
import { Router, View, NotFoundBoundary, } from 'react-navi';

import getRoutes from 'config/routes';
import NotFound from 'pages/public/NotFound';
import 'assets/styles/global.scss';

const rootElement = document.getElementById(
  'root'
);

getRoutes().then(
  (
    routes
  ): void => {
    ReactDOM.render(
      <Suspense fallback={null}>
        <Router routes={routes}>
          <NotFoundBoundary render={(): ReactElement => <NotFound />}>
            <View />
          </NotFoundBoundary>
        </Router>
      </Suspense>,
      rootElement,
    );
  },
);
