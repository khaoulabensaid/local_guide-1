import React, { Component } from "react";
import ReactDOM from "react-dom";

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Home from './components/homepage/home.jsx';
import { BrowserRouter } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
