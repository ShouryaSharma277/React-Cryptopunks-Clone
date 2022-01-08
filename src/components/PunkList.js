import React from "react";
import { CollectionCard } from "./CollectionCard";
import "./punkList.css";

export const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList cursor-pointer flex overflow-scroll border-t-white mt-5 py-5">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};
