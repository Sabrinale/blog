import * as types from "../actions";

const initialState = "home";

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCATION:
      return action.location;
    default:
      return state;
  }
};

export default locationReducer;
