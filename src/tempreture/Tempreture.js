import React, { Component } from "react";
import "./Tempreture.css";

export default class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 10,

      tempClass: "Cold",
    };
    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
  }

  increaseTemp() {
    this.setState((prevState) => {
      return { temp: prevState.temp + 1 };
    });

    if (this.state.temp >= 14) {
      this.setState({ tempClass: "Hot" });
    }
  }
  decreaseTemp() {
    this.setState((prevState) => {
      return { temp: prevState.temp - 1 };
    });

    if (this.state.temp < 16) {
      this.setState({ tempClass: "Cold" });
    }
  }

  render() {
    return (
      <div className="background">
        <div>
          <div className="body">
            <div className="tempContainer">
              <div className="tempShower">
                <h1 className={`temp${this.state.tempClass}`}>
                  {this.state.temp} C
                </h1>
              </div>
              <div className="btRow">
                <button className="bt" onClick={this.decreaseTemp}>
                  -
                </button>
                <div className="sizedBox"></div>
                <button className="bt" onClick={this.increaseTemp}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
