import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

//import { MDBCol, MDBSelectInput, MDBSelect} from "mdbreact";
import FindProfile from "./localguide.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: [],
      typingButton: false,
      selectCity: "",
      selectLang: "",
      selectGender: "",
    };
  }
  componentDidMount() {
    axios.get("/1").then((data) => {
      this.setState({ newData: data.data });
    });
  }
  typingMethod() {
    this.setState({
      typingButton: !this.state.typingButton,
    });

    axios
      .get(
        `/search?city=${this.state.selectCity}&languages=${this.state.selectLang}&gender=${this.state.selectGender}`
      )
      .then((result) => {
        this.setState({ newData: result.data });
      });
  }
  handleChangeCity(e) {
    this.setState({
      selectCity: e.target.value,
    });
  }
  handleChangeLang(e) {
    this.setState({
      selectLang: e.target.value,
    });
  }
  handleChangeGender(e) {
    this.setState({
      selectGender: e.target.value,
    });
  }

  // filterBy() {

  //   var _idOne = this.state.selectCity;
  //   var _idTwo = this.state.selectLang;
  //   var _idThree = this.state.selectGender;
  //   let dataFilter = this.state.dataBase.filter((ele) => {
  //     return (
  //       ele.city === _idOne &&
  //       ele.languages.includes(_idTwo) &&
  //       ele.gender === _idThree
  //     );
  //   });
  //   this.setState({
  //     newData:dataFilter,
  //   })
  // }

  render() {
    if (!this.state.typingButton) {
      return (
        <div>
          <div id="brand">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    Find your local guide
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div id="searchBar">
            <select
              className="browser-default custom-select custom-select-lg mb-3"
              onChange={this.handleChangeCity.bind(this)}
            >
              <option defaultValue>Cities</option>
              <option value="Beja">Beja</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabes">Gabes</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairawen">Kairawen</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kebili">Kebili</option>
              <option value="Kef">Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Medenin">Medenin</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabel">Nabel/</option>
              <option value="Sfax">Sfax</option>
              <option value="Siliana">Siliana</option>
              <option value="SidiBouzid">SidiBouzid</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouin">Tataouin</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghwan">Zaghwan</option>
            </select>
            <select
              className="custom-select custom-select-sm"
              onChange={this.handleChangeLang.bind(this)}
            >
              <option defaultValue>Languages</option>
              <option value="Arabic">Arabic</option>
              <option value="Chinese">Chinese</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Russian">Russian</option>
              <option value="Spanish">Spanish</option>
            </select>
            <select
              className="custom-select custom-select-sm"
              onChange={this.handleChangeGender.bind(this)}
            >
              <option defaultValue>Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          {/* <button type="button" id="buttonFind">Find</button> */}
          <div id="buttonFind">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.typingMethod.bind(this)}
            >
              Search
            </button>
          </div>
          <p>{this.state.selectCity}</p>
          <p>{this.state.selectLang}</p>
          <p>{this.state.selectGender}</p>
        </div>
      );
    } else {
      return (
        <div>
          <div id="wrapper">
            {this.state.newData.map((data, i) => {
              return (
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <FindProfile key={i} data={data} />
                      </th>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Search;
