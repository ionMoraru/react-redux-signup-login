import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { HomePage } from '../HomePage';
import { alertActions } from '../_actions';
import { history } from '../_helpers';
import { PrivateRoute } from '../_components';


class App extends Component {
    constructor(props) {
        super(props);
        
        const { dispatch } = this.props;
        history.listen((location, action) => {
            //clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    
    render() {
        const { alert } = this.props;
        return (
            <div className='jumbotron'>
                <div className='container'>
                    <div className='col-md-8 col-md-offset-2'>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path='/' component={HomePage} />
                                <Route path='/login' component={LoginPage} />
                                <Route path='/register' component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>               
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 