import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/actionUser';
import { browserHistory } from '../history';
import http from '../http-common';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            loginError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({loginError: false});
        const { name, value } = e.target;
        this.setState({ username: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username } = this.state;

        if (username) {
            const response = http.get("/books");

            response
                .then((res) => {
                    this.props.login(username);
                    browserHistory.push('/');
                })
                .catch((err) => {
                    this.setState({ loginError: true });
                });
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
                    {this.state.loginError && <h2>Authentication failed. Please verify that the server is up and connection is established.</h2>}
                </form>
            </div>
        );
    }
}

const mapState = (state) => {
    return { username: state.username };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username) => dispatch(userActions.login(username))
  }
}

const connectedLogin = connect(mapState, mapDispatchToProps)(Login);
export { connectedLogin as Login};