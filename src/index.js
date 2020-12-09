import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ModelManager } from "@adobe/aem-spa-page-model-manager";

import { CustomModelClient } from './server/CustomModelClient';

const modelClient = new CustomModelClient('https://author-p15902-e23962-cmstg.adobeaemcloud.com');
ModelManager.initializeAsync({
    modelClient,
    path: "/content/editorxpdevelopment/us/en.model.json"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
