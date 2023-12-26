import React from "react";

const Box = ({ title, item, result }) => {
  console.log(title, item, result);
  if (title === "Compuer" && result !== "Tie" && result !== "") {
    result = result === "Win" ? "Lose" : "Win";
  } else {
    result = result;
  }
  
  return (
    <div className="box">
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item && item.img}
        alt={item && item.name}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
