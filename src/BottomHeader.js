import React from "react";
import "./BottomHeader.css";

function BottomHeader() {
  return (
    <div className="bottomheader">
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">FREE SHIPPING & RETURN </span>
          <span className="header_optionLineTwo">
            Free shiping on all orders above $40
          </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">MONEY BACK GAURANTEE</span>
          <span className="header_optionLineTwo">
            100% monety back gaurante
          </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">ONLINE SUPPORT 24/7</span>
          <span className="header_optionLineTwo">Online doctor supoort </span>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
