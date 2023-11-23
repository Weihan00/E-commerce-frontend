import React from "react";
import "./RelatedProduct.css";
import data_product from "../assets/data";
import Item from "../Items/Item";
const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item ">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
