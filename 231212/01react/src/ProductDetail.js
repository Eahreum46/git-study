import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const Params = useParams();
  console.log(Params);
  const { id, num } = useParams();
  return (
    <div>
      <h1>상품 카테고리 {id}</h1>
      <h1>상품 품번 {num}</h1>
    </div>
  );
};

export default ProductDetail;
