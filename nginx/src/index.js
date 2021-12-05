import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login} from './components/Login';
import { Home} from './components/Home';
import { ItemGenerator } from './components/ItemGenerator';
import { AggregationTime } from './components/AggregationTime';

import { browserHistory } from './history';
import configureStore from './store/storeUser';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/itemGenerator" element={<ItemGenerator/>} />
        <Route path="/aggregationTime" element={<AggregationTime/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

