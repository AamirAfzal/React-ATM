import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './CustomNavbar';
import Account from './Account'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Withdraw />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
