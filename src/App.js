import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import axios from "axios";
import { PunkList } from "./components/PunkList";
import { Main } from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xbfB7b0b9554fF84379659B785eb8FC8C7E5Da11D&order_direction=asc"
      );
      setPunkListData(openSeaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app bg-black">
      <Header />
      {punkListData.length > 0 && (
        <div>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </div>
      )}
    </div>
  );
}

export default App;
