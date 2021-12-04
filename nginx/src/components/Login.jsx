import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionUser } from '../actions/actionUser';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  inputChange = (event) => {
    console.log(`===Mela:   target: ${event.target} `);
    const {u, value } = event.target;
    console.log(`===Mela:   u: ${u} `);
    console.log(`===Mela:   value: ${value} `);
    this.setState({ ['username']: value });
  }

  loginForm = async (event) => {
    const username = JSON.parse(window.localStorage.getItem('username'));
    if (username) {
        this.props.dispatch(ActionUser.login(username));
        this.props.history.push('/home')
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
            <div className="col-sm-3 mb-2">
              <input type="text" value={username} name="username" onChange={(e) => { this.inputChange(e)} } className="form-control" id="username" placeholder="User Name" />
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-3 mb-2">
              <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 center mt-2">
              <button type="submit" className="button" onClick={this.loginForm}>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Login);