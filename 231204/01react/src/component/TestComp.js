import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state + action.data;
    case "InIT":
      return 0;
    default:
      return state;
  }
}

const TestComp = () => {
  // const [count, setCount] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE", data: 1 });
  const onDecrease = () => dispatch({ type: "DECREASE", data: 1 });
  //count : 상태변화의 값을 담고있었던 state 변수값이 담겨지는 요소
  //dispath : 상태변화를 일으키고, 구분짓는 함수
  //reducer : 상태변화에 따라 실제 실행하게 만드는 실행부의 함수
  //0 : state 변수에 담길 초기값

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default TestComp;
