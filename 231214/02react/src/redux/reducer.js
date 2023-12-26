const initialState = { contactList: [], keyWord };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case "ADD_CONTACT":
      return{
        ...state,
        contactList: [...state.contactList, {payload.name, payload.phoneNumber}]
      }
    case "SEARCH_BY_USERNAME":
      return{
        ...state,
        contactList: [...state.contactList],keyWord: payload.keyWord,
      }
  }
};

export default reducer;
