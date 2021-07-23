import React from "react";
import "./Product.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} style={{ marginTop: "30px" }} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="fav_icon">
          <FavoriteBorderIcon />
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>{" "}
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
