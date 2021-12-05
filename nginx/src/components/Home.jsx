import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
      console.log(`=====Mela: Home: this.props: ${JSON.stringify(this.props)}`);
      const { username } = this.props;
      console.log(`=====Mela: Home: username: ${username}`);
      return (
        <div>
            <h5>Welcome Melaniaaaa</h5>
        </div>
      )
    }
  }

function mapState(state) {
    return { username: state.username };
}

const connectedHome = connect(mapState)(Home);
export { connectedHome as Home };