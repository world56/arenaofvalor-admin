import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './config/cache';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
