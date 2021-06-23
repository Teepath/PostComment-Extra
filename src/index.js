import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middlewares";
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
  <App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();
