import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './views/HelloWorld'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HelloWorld compiler='TypeScript' framework='React'/>,
  rootElement,
);