import React, { Component } from "react";

import "./usd.css";
import CurrencyContext from "./currencyContext";

class Usd extends Component {
  state = {};
  static contextType = CurrencyContext;

  render() {
    return (
      <div className="right">
        <div id="right-column">
          <article>
            <header>
              <h3>US Dollar</h3>
            </header>
            <div className="content">
              <textarea
                id="usd"
                placeholder="Enter value in USD"
                value={this.context.displayText.usd}
                onChange={this.context.onUsdChange}
              ></textarea>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Usd;
