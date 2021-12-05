import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login} from './components/Login';
import { Home} from './components/Home';
import { browserHistory } from './history';
import configureStore from './store/storeUser';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

