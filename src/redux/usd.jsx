import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./usd.css";
import { convert } from "./actions";

function convertToYen(newUsd) {
  return newUsd * 113;
}

function Usd() {
  // state = {};

  const currency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const handleUsdChange = event => {
    console.log("handleUsdChange", event.target.value);
    console.log("currency", currency); //currency {usd: 0, yen: 0}
    const currencyUpdated = { ...currency };
    currencyUpdated.usd = event.target.value;
    currencyUpdated.yen = convertToYen(event.target.value);
    dispatch(convert(currencyUpdated));
  };

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
              value={currency.usd}
              onChange={e => handleUsdChange(e)}
            ></textarea>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Usd;
