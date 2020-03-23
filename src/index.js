import React from 'react';
import ReactDOM from 'react-dom';
import Movvi from './movvi';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Movvi />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
