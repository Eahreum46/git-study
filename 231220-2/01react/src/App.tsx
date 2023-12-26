import React from "react";
import "./App.css";
import styled from "styled-components";
import Circle from "Circle";

function App() {
  return (
    <div className="App">
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;
