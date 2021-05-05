export const getPeople = () => {
  // Make an asynchronous api call to get data, then we want to dispatch the action
  return function (dispatch) {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_PEOPLE_SUCCESS", payload: data.results });
      });
  };
};

export const addMorePeople = () => {
  return function (dispatch) {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_MORE_PEOPLE_SUCCESS", payload: data.results });
      });
  };
};

export const clearPeople = () => {
  return {
    type: "CLEAR_PEOPLE",
  };
};
