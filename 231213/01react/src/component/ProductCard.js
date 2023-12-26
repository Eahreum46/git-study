import React from "react";

const ProductCard = ({ item }) => {
  const showDetail = () => {
    
  };
  return (
    <div className="Productcard" onClick={showDetail}>
      <img src={item?.img} />
      <div>Choice</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신상품" : "세일상품"}</div>
    </div>
  );
};

export default ProductCard;
