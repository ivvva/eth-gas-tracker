import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GasTracker() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETH_SCAN_API_KEY} `
    );
    setData(data);
    console.log(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>GasTracker</div>;
}
