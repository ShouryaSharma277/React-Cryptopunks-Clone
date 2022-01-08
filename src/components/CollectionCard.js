import React from "react";
import weth from "../assets/weth.png";
import "./collectionCard.css";

export const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard text-white rounded-xl overflow-hidden mr-8 w-72 h-74">
      <img className="w-max" src={image} alt="" />
      <div className="details p-5 font-bold text-2xl">
        <div className="name">
          {name}
          <div className="id text-xl">·#{id}</div>
        </div>

        <div className="flex align-center mt-3 object-contain">
          <img src={weth} className="h-8 w-5" alt="" />
          <div className="ml-2 font-bold">{traits[0].value}</div>
        </div>
      </div>
    </div>
  );
};
