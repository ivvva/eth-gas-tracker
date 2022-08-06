import React, { useEffect, useState } from "react";
import DisplayGasTracker from "./DisplayGasTracker";
import axios from "axios";

export default function GasTracker() {
  const [data, setData] = useState("");

  useEffect(() => {
    getAllData()
    const intervalId = setInterval(() => {
      getAllData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const getAllData = async () => {
    axios
      .get(
        `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETH_SCAN_API_KEY}`
      )
      .then((res) => {
        const allData = res.data;
        setData(allData);
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  return <DisplayGasTracker data={data.result} />;
}
