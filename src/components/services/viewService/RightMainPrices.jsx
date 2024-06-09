import React from "react";

function RightMainPrices() {
  return (
    <div className="viewService_prices">
      <div className="viewService__prices_h">Price list</div>
      <div className="viewService__prices_name_price">
        <div className="viewService__prices_value">
          <div className="viewService__prices_name">Private clients</div>
          <div className="viewService__prices_price">100$</div>
        </div>
        <div className="viewService__prices_value">
          <div className="viewService__prices_name">Corporate</div>
          <div className="viewService__prices_price">80$</div>
        </div>
        <div className="viewService__prices_value">
          <div className="viewService__prices_name">Children</div>
          <div className="viewService__prices_price">70$</div>
        </div>
      </div>
    </div>
  );
}

export default RightMainPrices;
