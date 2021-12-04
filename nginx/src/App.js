import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ActionUser } from './actions/actionUser';
import { Login} from './components/Login';
import { Home} from './components/Home';

class App extends React.Component {
  componentDidMount() {
    const username = JSON.parse(window.localStorage.getItem('username'));
    if (username) {
      this.props.dispatch(ActionUser.login(username));
    }
  }
  render() {
    return (
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(App);