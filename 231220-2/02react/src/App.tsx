import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DataView from "./component/DataView";
import TextInput from "./component/TextInput";
import Button from "./component/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #eee;
`;

const mockup = ["리액트 공부하기", "운동하기", "책 읽기"];

function App() {
  const [toDoList, setToDoList] = useState(mockup);
  const [toDo, setTodo] = useState("");
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = () => {
    if (toDo === "") return;
    setToDoList([...toDoList, toDo]);
    setTodo("");
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setTodo} />
      <Button label="추가" onClick={onAdd} />
    </Container>
  );
}

export default App;
