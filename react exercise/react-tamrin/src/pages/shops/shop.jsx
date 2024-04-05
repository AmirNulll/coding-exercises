import React from "react";
import product from "../shops/product";
import { Products } from "../../data/products";

function Shop() {
  return (
    <React.Fragment>
      <h1>shop</h1>;
      <div className="row">
        {Products.map((productData) => (
          <product data={productData} />
        ))}
      </div>
    </React.Fragment>
  );
}
export default Shop;
