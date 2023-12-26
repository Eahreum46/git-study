import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.bgColor};
`;
const h1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Container>
        <h1>protected</h1>
      </Container>
    </div>
  );
}

export default App;
