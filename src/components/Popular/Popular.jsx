import React from "react";
import "./Popular.css";
import Item from "../Items/Item";
import data_product from "../assets/data";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr className="popular-line" />
      <div className="popular-items">
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
