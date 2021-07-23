import React from "react";
import "./TopHeader.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function TopHeader() {
  return (
    <div className="topheader">
      <div className="topheader_left">
        <div className="topheader_left_title">
          <span>ENG</span>
          <ArrowDropDownIcon />
        </div>
        <div className="topheader_left_title">
          <span>USD</span>
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="topheader_center  ">
        <div className="topheader_option">
          <span>TRACK ORDER</span>
        </div>

        <div className="topheader_option">
          <span>ABOUT</span>
        </div>

        <div className="topheader_option">
          <span>OUR STORES</span>
        </div>

        <div className="topheader_option">
          <span>CONTACT</span>
        </div>

        <div className="topheader_option">
          <InstagramIcon />
        </div>
        <div className="topheader_option">
          <TwitterIcon />
        </div>
        <div className="topheader_option">
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
