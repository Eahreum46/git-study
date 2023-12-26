import React from "react";
import ShowInputButton from "./ShowInputButton";
import TodoInput from "./TodoInput";

interface props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const InputContainer = ({ toDo, setTodo, onAdd }: props) => {
  const [showToDoInput, setShowToDoInput] = useState(true);
  return (
    <div>
      {showToDoInput && (
        <TodoInput toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
      )}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </div>
  );
};

export default InputContainer;
