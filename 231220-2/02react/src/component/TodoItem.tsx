import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.2rem;
  flex: 1;
`;

interface props {
  label: string;
  onDelete?: (todo: string) => void;
}

const TodoItem = ({ label, onDelete }: props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
