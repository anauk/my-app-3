import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import 'bootstrap/dist/css/bootstrap.css';
import router from './route';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root'));

