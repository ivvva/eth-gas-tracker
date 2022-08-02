import React, { useEffect, useState } from "react";
import DisplayGasTracker from "./DisplayGasTracker";
import axios from "axios";

export default function GasTracker() {
  const [data, setData] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    axios
      .get(
        `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETH_SCAN_API_KEY}`
      )
      .then((res) => {
        const allData = res.data;
        console.log(allData)
        setData(allData);
      })
      .catch((err) => console.error(`Error: ${err}`));
    //   const { data } = await axios.get(
    //     `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETH_SCAN_API_KEY} `
    //   );
    //   console.log({bru: data})
    //  ;
    //   console.log(data.result.ProposeGasPrice)
  };

  return <DisplayGasTracker data={data} />;
}
