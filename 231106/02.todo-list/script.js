//내가 무엇을 하고자 하는가?
//내가 그 무엇인가를 하기 위해서 필요한 것은 무엇인가?

//프로그램이 작동되는 프로세스
// 1)사용자가 input 태그에 오늘 할 일을 입력한다
// 2)사용자가 입력한 값이 "제출"버튼을 클릭햇을 때, 특정 저장 공간에 저장된다
// 3)그 저장된 공간의 입력값이 "todo-list"에 출력되어야한다.

const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

const saveToLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
// console.log(todoInput);

const addTodo = (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-content");
  newTodo.innerText = todoInput.value;
  newDiv.appendChild(newTodo);

  saveToLocal(todoInput.value);

  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);
  todoInput.value = "";
};

document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("click", addTodo);
