import React, { Suspense, ReactElement, } from 'react';
import ReactDOM from 'react-dom';
import { Router, View, NotFoundBoundary, } from 'react-navi';
import { IntlProvider, } from 'react-intl';

import getRoutes from 'config/routes';
import NotFound from 'pages/public/NotFound';
import { getLanguage, getMessage, } from 'config/internationalization';
import 'assets/styles/global.scss';

const rootElement = document.getElementById(
  'root'
);

getRoutes().then(
  (
    routes
  ): void => {
    ReactDOM.render(
      <IntlProvider locale={getLanguage()} messages={getMessage()}>
        <Suspense fallback={null}>
          <Router routes={routes}>
            <NotFoundBoundary render={(): ReactElement => <NotFound />}>
              <View />
            </NotFoundBoundary>
          </Router>
        </Suspense>
      </IntlProvider>,
      rootElement,
    );
  },
);
