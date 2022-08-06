import React from "react";
import logo from "../assets/eth-logo.png"
import "../assets/css/displayGasTracker.css"

export default function DisplayGasTracker(props) {
  const displayData = (props) => {
    const { data } = props;

    if (data) {
      return (
        <>
          <div className="logo"><img src={logo} /> <h1>Gas Tracker</h1></div>
          <div className="bod">
            <div className="container">
              <div className="prices">
                <div className="price">Low  😄 <br></br>{data.SafeGasPrice} <p>GWEI</p></div>
                <div className="price">Average  🙂 <br></br>{data.ProposeGasPrice}<p>GWEI</p> </div>
                <div className="price">High  🧐 <br></br> {data.FastGasPrice}<p>GWEI</p> </div>
              </div>
              <div className="lastBlock">Last Block: <a href={`https://etherscan.io/block/${data.LastBlock}`}>{data.LastBlock}</a></div>
            </div>
            <div className="circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
            </div>
          </div>
        </>
      );
    } else return <div>No data here!</div>;
  };

  return <div> {displayData(props)}</div>;
}
