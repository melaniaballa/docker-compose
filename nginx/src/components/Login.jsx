import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/actionUser';

import configureStore from '../store/storeUser';

const store = configureStore();

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ ['username']: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(`====Mela: Login handleSubmit: this.state: ${this.state}`);
        const { username } = this.state;

        console.log(`====Mela: Login handleSubmit: username: ${username}`);
        if (username) {
            this.props.dispatch(userActions.login(username));
            // this.props.login(username);
            // store.dispatch(userActions.login(username));
        }
    }

    render() {
        const { username } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

// function mapState(state) {
//     return { username: state.username };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: userActions.login(),
//     dispatch
//   }
// }

const connectedLogin = connect()(Login);
export { connectedLogin as Login};