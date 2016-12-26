'use strict';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    /*<Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,*/
    <App />,
    document.getElementById('app')
);

