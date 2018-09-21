import * as types from "../actions";

const initialID = 20;

const idReducer = (state = initialID, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return state + 1;
    default:
      return state;
  }
};

export default idReducer;
