import React, { Component } from "react";

import "./usd.css";
import CurrencyContext from "./currencyContext";

class Yen extends Component {
  state = {};
  static contextType = CurrencyContext;

  render() {
    return (
      <div className="left">
        <div id="left-column">
          <article>
            <header>
              <h3>Japanese Yen</h3>
            </header>

            <div className="content">
              <textarea
                id="yen"
                placeholder="Enter value in Yen"
                value={this.context.displayText.yen}
                onChange={this.context.onYenChange}
              ></textarea>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Yen;
