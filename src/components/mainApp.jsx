import React, { Component } from "react";

import Usd from "./usd";
import Yen from "./yen";

class MainApp extends Component {
  state = {
    displayText: {
      usd: 0,
      yen: 0
    }
  };
  handleYenChange = event => {
    console.log("handleYenChange", event.target.value);
    const displayText = this.state.displayText;
    displayText.yen = event.target.value;
    displayText.usd = this.convertToUsd(event.target.value);
    this.setState({ displayText });
  };

  handleUsdChange = event => {
    console.log("handleUsdChange", event.target.value);
    const displayText = this.state.displayText;
    displayText.usd = event.target.value;
    displayText.yen = this.convertToYen(event.target.value);
    this.setState({ displayText });
  };

  convertToYen(newUsd) {
    return newUsd * 113;
  }
  convertToUsd(newYen) {
    return newYen * 0.0088;
  }
  render() {
    return (
      <React.Fragment>
        <Yen
          yenDisplayText={this.state.displayText.yen}
          onYenChange={this.handleYenChange}
        ></Yen>
        <Usd
          usdDisplayText={this.state.displayText.usd}
          onUsdChange={this.handleUsdChange}
        ></Usd>
      </React.Fragment>
    );
  }
}

export default MainApp;
