const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PEOPLE_SUCCESS":
      return action.payload;
    case "ADD_PERSON":
      return [...state, action.payload];
    case "FETCH_MORE_PEOPLE_SUCCESS":
      return [...state, ...action.payload];
    case "CLEAR_PEOPLE":
      return [];
    default:
      return state;
  }
};

export default peopleReducer;
