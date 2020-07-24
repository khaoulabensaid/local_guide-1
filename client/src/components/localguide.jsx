import React from "react";

class FindProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="Profile">
        <img src={this.props.data.imgURL} />
        <p>Name : {this.props.data.Name}</p>
        <p>City : {this.props.data.city}</p>
        <p>Age : {this.props.data.age}</p>
        <p>Gender :{this.props.data.gender}</p>
        <p>Languages : {this.props.data.languages.toString()}</p>
      </div>
    );
  }
}
export default FindProfile;
