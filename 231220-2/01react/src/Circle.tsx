import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  borderColor,
  bgColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState < number || string > "true";
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
