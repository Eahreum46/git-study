const initialState = {
  count: 0,
  id: "",
  password: "",
};

function Reducer(state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // }
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - payload.num };
    case "LOGIN":
      return { ...state, id: payload.id, password: payload.password };
    default:
      return { ...state };
  }
  // return { ...state };
}
//조건문 형식 or 스위치문으로 써도 괜찮다

export default Reducer;
