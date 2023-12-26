import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

const Title = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}

export default App;
