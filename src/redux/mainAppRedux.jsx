import React, { Component } from "react";

import Usd from "./usd";
import Yen from "./yen";
import { useSelector, useDispatch } from "react-redux";

class MainAppRedux extends Component {
  render() {
    return (
      <React.Fragment>
        <Yen></Yen>
        <Usd></Usd>
      </React.Fragment>
    );
  }
}

export default MainAppRedux;
