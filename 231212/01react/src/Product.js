import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query);
  return (
    <div>
      <h1>Show All Products</h1>
    </div>
  );
};

export default Product;
