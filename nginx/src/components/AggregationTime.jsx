import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import http from '../http-common';

class AggregationTime extends React.Component {

    aggregateBooks(e) {
        e.preventDefault();

        const response = http.get("/aggregate");

        response
            .then((res) => {
                console.log(`========Mela: Aggregate time: res: ${res}`);
            })
            .catch((err) => {
                console.log(`Error occured while obtainingt aggregation time: ${err}`)
            });;
    }

    render() {
        return (
          <div>
            <li style={{margin: 2 + 'em'}}>
                <Link to="/">Home/Menu</Link>
            </li>
            <h4>Sort books by isbn:</h4>
            <button  style={{ ...{padding: '10px 24px'}, ...{border: '2px solid #4CAF50'}}} onClick={this.aggregateBooks}>Retrieve aggregation time</button>
          </div>
        );
    }
}

const connectedAggregationTime = connect()(AggregationTime);
export { connectedAggregationTime as AggregationTime };