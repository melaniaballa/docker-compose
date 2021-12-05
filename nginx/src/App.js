import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login} from './components/Login';
import { Home} from './components/Home';

class App extends React.Component {
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


export default connect()(App);