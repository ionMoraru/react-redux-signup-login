import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App/App';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

const mountNode = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>, 
    mountNode
);