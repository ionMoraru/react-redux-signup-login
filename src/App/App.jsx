import React, { Component } from 'react';
import Login from '../Login/Login';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomePage/HomePage';
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers/history';
import { PrivateRoute } from '../_components/PrivateRoute';

class App extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <div className='container'>
                    <div className='col-md-8 col-md-offset-2'>
                        {/* alert */}
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path='/' component={HomePage} />
                                <Route path='/login' component={Login} />
                                <Route path='/register' component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>               
            </div>
        );
    }
}

export default App;