import React, { Suspense, ReactElement, } from 'react'
import ReactDOM from 'react-dom'
import { Router, View, NotFoundBoundary, } from 'react-navi'
import { IntlProvider, } from 'react-intl'

import getRoutes from 'config/routes/'
import { StoreProvider, } from 'state/StoreProvider'
import reducer from 'state/reducer'
import initialState from 'state/initialState'
import NotFound from 'pages/public/NotFound'
import Splash from 'pages/public/Splash'
import HorizontalSpinner from 'atoms/HorizontalSpinner'
import { getLanguage, getMessage, } from 'config/internationalization/'
import 'assets/styles/global.scss'
import typography from './theme/typography'

typography.injectStyles()

const rootElement = document.getElementById(
  'root'
)

getRoutes().then(
  (
    routes
  ): void => {
    ReactDOM.render(
      <StoreProvider reducer={reducer} initialState={initialState}>
        <IntlProvider locale={getLanguage()} messages={getMessage()}>
          <Suspense fallback={<Splash />}>
            <Router routes={routes}>
              <NotFoundBoundary render={(): ReactElement => <NotFound />}>
                <HorizontalSpinner />
                <View />
              </NotFoundBoundary>
            </Router>
          </Suspense>
        </IntlProvider>
      </StoreProvider>,
      rootElement,
    )
  },
)
