// React
import React from 'react';
import ReactDOM from 'react-dom';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Redux
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

// App
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
    
