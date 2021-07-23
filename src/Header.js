import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CallIcon from "@material-ui/icons/Call";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Mejuri-Modern-Jewelry-Logo-Styles.png"
        alt="logo"
      />

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <CallIcon />
          <span className="header_optionLineOne">Call us now</span>
          <span className="header_optionLineTwo">+123 864 890</span>
        </div>

        <div className="header_option">
          <PermIdentityIcon />
          <span className="header_optionLineTwo"></span>
        </div>

        <div className="header_option">
          <FavoriteBorderIcon />
          <span className="header_optionLineOne"></span>
        </div>

        <div className="header_option">
          <ShoppingBasketIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
