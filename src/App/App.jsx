import React, { Component } from 'react';
import Login from '../Login/Login';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route path='/login' component={Login} />
                </Router>
            </div>
        );
    }
}

export default App;