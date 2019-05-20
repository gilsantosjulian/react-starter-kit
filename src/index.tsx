import React, { Suspense, ReactElement, } from 'react';
import ReactDOM from 'react-dom';
import { Router, View, NotFoundBoundary, } from 'react-navi';
import { IntlProvider, } from 'react-intl';

import getRoutes from 'config/routes';
import { StoreProvider, } from 'state/StoreProvider';
import reducers from 'state/reducer';
import initialState from 'state/initialState';
import NotFound from 'pages/public/NotFound';
import Splash from 'pages/public/Splash';
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
      <StoreProvider reducer={reducers} initialState={initialState}>
        <IntlProvider locale={getLanguage()} messages={getMessage()}>
          <Suspense fallback={<Splash />}>
            <Router routes={routes}>
              <NotFoundBoundary render={(): ReactElement => <NotFound />}>
                <View />
              </NotFoundBoundary>
            </Router>
          </Suspense>
        </IntlProvider>
      </StoreProvider>,
      rootElement,
    );
  },
);
