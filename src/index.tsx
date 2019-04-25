import React from 'react';
import ReactDOM from 'react-dom';
import { Router, View } from 'react-navi'

import routes from './config/routes';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router routes={routes}>
    <View />
  </Router>,
  rootElement,
);