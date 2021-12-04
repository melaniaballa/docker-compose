import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
    
    render() {
      return (
        <div>
            <h5>Welcome Melaniaaaa</h5>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      username: state.username
    }
  }
  
  export default connect(mapStateToProps)(Home);