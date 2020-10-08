import React, { Component } from "react";
import "./App.css";
import userpicture from "./Components/Assets/userpic.png";
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"


class App extends Component {
  /*Define the state*/
  state = {
    fullName: "Mariam Maalej",
    bio: "26 Years Old, Tunisian, graduated in 2018",
    imgSrc: (
      <img
        className="user-picture"
        src={userpicture}
        alt="user-picture"
        width="300px"
      ></img>
    ),
    profession: "Electromechancial Engineer",
    bol: false,
  };
  /*Test the boolean value*/
  change = () => {
    if (this.state.bol === true) {
      this.setState({
        bol: false,
      });
    } else {
      this.setState({
        bol: true,
      });
    }
  };
  /*Time to mount*/
  myTimer = () => {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = t;
  };
  componentDidMount = () => {
    var myVar = setInterval(this.myTimer, 1000);
    return myVar;
  };
  /*Rendering the result depending to boolean value*/
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <label htmlFor="show-state">Show State</label>
        <br></br>
        <button type="button" class="btn btn-primary" onClick={this.change}>
          Show
        </button>
        <br></br>
        <br></br>
        <span>Time since mount : </span>
        <span id="time"></span>
        {this.state.bol === true ? (
          <div className="about">
            <Navbar/>
            <h1>{this.state.fullName}</h1>
            <div className="photo">{this.state.imgSrc}</div>
            <p>Bio : {this.state.bio}</p>
            <p>Profession : {this.state.profession}</p>
            <Footer/>
          </div>
        ) : null}
      
      </div>
    );
  }
}

export default App;
