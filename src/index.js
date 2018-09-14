import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import { storeCreator } from './redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={storeCreator()}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
