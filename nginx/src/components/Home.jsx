import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>
        <h2  style={{color: 'tomato'}}>Welcome</h2>
        <div>
        <ul>
          <li style={{margin: 2 + 'em'}}>
            <Link to="/itemGenerator">Item Generator</Link>
          </li>
          <li style={{margin: 2 + 'em'}}>
            <Link to="/aggregationTime">Aggregation Time</Link>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

const connectedHome = connect()(Home);
export { connectedHome as Home };