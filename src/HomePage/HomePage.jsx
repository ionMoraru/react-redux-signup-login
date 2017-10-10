import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className='col-md-6 col-md-offset-3'>
                <h2>Hi</h2>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {/* list of users */}
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export default HomePage;