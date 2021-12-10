import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { userActions } from '../actions/actionUser';
import { browserHistory } from '../history';

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
            axios.get('/services/books')
            .then(res => {
                console.log(`====Mela: ${res}`);
                this.props.login(username);
                browserHistory.push('/');
            })
            .catch(err => {
                console.log(err);
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
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"name="password"/>
                    </div>
                    <div>
                        <button  style={{ ...{padding: '10px 24px'}, ...{border: '2px solid #4CAF50'}}}>Login</button>
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