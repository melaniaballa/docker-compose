import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import http from '../http-common';

class ItemGenerator extends React.Component {
    constructor() {
      super();
  
      this.state = {
        booksData: []
      }
    }
  
    generateBooks(e) {
      e.preventDefault();
      const response = http.post("/generate", {test: 'dsada', test2: 'dasdaf'});
      response
        .then((res) => {
          console.log('=========Mela: Home:generateBooks Items succesfully generated.');
          http.get("/books")
              .then((res) => {
                this.state.booksData = res;
              });
        })
        .catch();
    }

    render() {
        const omittedProps = ["longDescription", "pageCount", "isbn"];

        return (
            <div>
                <li style={{margin: 2 + 'em'}}>
                    <Link to="/">Home/Menu</Link>
                </li>
                <div>
                    <button style={{ ...{padding: '10px 24px'}, ...{border: '2px solid #4CAF50'}}} onClick={this.generateBooks}>Generate books</button>
                </div>
                <h4>Books:</h4>
                <>
                {this.state.booksData.map(d => (Object.keys(d).map(prop => (!omittedProps.includes(prop) && (<tr><td>{d[prop]}</td></tr>)))))}
                </>
            </div>
        );
    }
}

const connectedItemGenerator = connect()(ItemGenerator);
export { connectedItemGenerator as ItemGenerator };
