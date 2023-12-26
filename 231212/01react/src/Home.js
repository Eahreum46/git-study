import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const GoProductpage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      <div>Home Page</div>
      <Link to="/about">Go To About Page</Link>
      <button onClick={GoProductpage}>go to product page</button>
    </div>
  );
};

export default Home;
