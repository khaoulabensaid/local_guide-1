
import React, { Component} from "react";
import ReactDOM from "react-dom";
import GuidePage from "./components/guidePage.jsx"
import Search from "./components/searchbar.jsx"
import Signup from './components/homepage/signup.jsx';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import NavBar from './components/navbar.jsx';
import Login from './components/homepage/login.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
   
  }
  render() {
    return (<div>
      <NavBar fixed="top" />
     <Signup />
     <Login />
        <GuidePage /> 
        <Search/>
    </div>)
  }


 



}

ReactDOM.render(<App/>,document.getElementById('app'))