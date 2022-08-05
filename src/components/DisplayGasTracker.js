import React from "react";
import "../assets/css/displayGasTracker.css"

export default function DisplayGasTracker(props) {
  // console.log(props.data)
  const displayData = (props) => {
    const { data } = props;
    console.log(props.data);

    if (data) {
      return (
        <div className="bod">
          <div className="container">
          <div className="prices">
            <div className="price">Low <br></br>{data.SafeGasPrice}</div>
            <div className="price">Average <br></br>{data.ProposeGasPrice}</div>
            <div className="price">High<br></br> {data.FastGasPrice}</div>
            </div>
            <div className="lastBlock">Last Block: {data.LastBlock}</div>
          </div>
          <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
      );
    } else return <div>No data here!</div>;
  };

  return <div> {displayData(props)}</div>;
}
