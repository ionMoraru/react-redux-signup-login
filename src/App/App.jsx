import React, { Component } from 'react';
import Login from '../Login/Login';
import RegisterPage from '../RegisterPage/RegisterPage';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={RegisterPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;