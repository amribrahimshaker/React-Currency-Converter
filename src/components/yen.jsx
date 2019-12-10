import React, { Component } from "react";
import "./usd.css";

class Yen extends Component {
  state = {};

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
                value={this.props.yenDisplayText}
                onChange={this.props.onYenChange}
              ></textarea>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Yen;
