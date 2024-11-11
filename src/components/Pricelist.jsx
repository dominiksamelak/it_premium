import React from "react";
import { priceListData } from "./pricelistData.jsx";

const PriceList = () => {
  return (
    <div className="price-list-shadow">
      <div className="price-list">
        {priceListData.map((item) => (
          <div className="price-container">
            <div key={item.id} className="price-item">
              <h3 className="item-name">{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
          </div>

        ))}
      </div>
    </div>

  );
};

export default PriceList;
