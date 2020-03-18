import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./usd.css";
import { convert } from "./actions";

function convertToUsd(newYen) {
  return newYen * 0.0088;
}

function Yen() {
  // state = {};

  const currency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const handleYenChange = event => {
    console.log("handleYenChange", event.target.value);
    console.log("currency", currency); //currency {usd: 0, yen: 0}
    const currencyUpdated = { ...currency };
    currencyUpdated.yen = event.target.value;
    currencyUpdated.usd = convertToUsd(event.target.value);
    dispatch(convert(currencyUpdated));
  };

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
              value={currency.yen}
              onChange={e => handleYenChange(e)}
            ></textarea>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Yen;
