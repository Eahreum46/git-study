import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const GotoHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About Page</div>
      <button onClick={GotoHomepage}>Go To HomePage</button>
    </div>
  );
};

export default About;
