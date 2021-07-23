import React from "react";
import "./Menu.css";
import Product from "./Product";
export const Menu = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="menu">
          <div className="vertical-menu">
            <div className="menu_header">
              <h3>BROWSE CATEGORIES</h3>
            </div>

            <a href="#" class="active">
              Home
            </a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="#">Pages</a>
            <a href="#">Features</a>
            <a href="#">About Us</a>
            <a href="#">Special Offer</a>
            <img
              className="home_image"
              src="https://image.shutterstock.com/image-vector/abstract-sale-banner-50-off-260nw-527522779.jpg"
              alt=""
            />
            <img
              className="home_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVyhB6aE3KiRw8t1rHu7b8crp9DA19G9sgQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="home">
          <div className="home_container">
            <img
              className="home_image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg"
              alt=""
            />
            <div className="home_subimage">
              <img
                className="home_images"
                src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618566530277/promo-code-for-watches.jpg"
                alt=""
              />
              <img
                className="home_images"
                src="https://i.pinimg.com/originals/d6/8a/aa/d68aaaf37c90a088731b2d61641c7764.png"
                alt=""
              />
              <img
                className="home_images"
                src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/6972-World-of-Titan_Kolkata_Sales_6.PNG"
                alt=""
              />
              <img
                className="home_images"
                src="https://www.titan.co.in/wps/wcm/connect/titan/846a3573-9783-40f3-8008-19e798418a32/smartphone/NCEMI_700x328.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-846a3573-9783-40f3-8008-19e798418a32-smartphone-nEOqC4m"
                alt=""
              />
            </div>

            <div className="hometitle">
              <h4>FEATURED PRODUCTS</h4>
            </div>
            <div className="home_row">
              <Product
                id="331"
                title="The Hobbit - J. R. R. Tolkien; | Foyles Bookstore"
                price={29.99}
                image="https://cdn.lifehack.org/wp-content/uploads/2015/03/Hobbit_book.jpg"
                rating={5}
              />
              <Product
                id="31"
                title="Best Amazon Products For People in Their 20s | POPSUGAR Smart Living"
                price={23.99}
                image="https://media1.popsugar-assets.com/files/thumbor/6ZqLkmM1DNMGsMxENI4ds4Q1Lmc/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/19/914/n/1922441/19f1990d607dee79160ef0.14739303_/i/Best-Amazon-Products-People-20s.jpg"
                rating={3}
              />
              <Product
                id="155"
                title="Coolest Amazon Products Found on TikTok | POPSUGAR Smart Living"
                price={29.99}
                image="https://media1.popsugar-assets.com/files/thumbor/47N3p1J43psDzcBFYHAv-hrymB8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/08/10/123/n/1922441/6e99c5815f31faf3e16fc4.15276199_/i/coolest-amazon-products-found-on-tiktok-2020.jpg"
                rating={5}
              />
              <Product
                id="155"
                title="Coolest Amazon Products Found on TikTok | POPSUGAR Smart Living"
                price={29.99}
                image="https://media1.popsugar-assets.com/files/thumbor/47N3p1J43psDzcBFYHAv-hrymB8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/08/10/123/n/1922441/6e99c5815f31faf3e16fc4.15276199_/i/coolest-amazon-products-found-on-tiktok-2020.jpg"
                rating={5}
              />
            </div>
            {/* <div>
                <h4>sdsddsd</h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
