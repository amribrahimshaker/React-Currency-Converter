import React, { Component } from "react";

import "./usd.css";
class Usd extends Component {
  state = {};

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
                value={this.props.usdDisplayText}
                onChange={this.props.onUsdChange}
              ></textarea>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Usd;
