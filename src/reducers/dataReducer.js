import * as types from "../actions";
import data from "../data";

const initialData = data;

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_DATA: {
      const newAllPosts = { ...state.all_posts, [action.id]: action.data };
      return { ...state, all_posts: newAllPosts };
    }
    case types.EDIT_DATA: {
      const newAllPosts = { ...state.all_posts, [action.id]: action.data };
      return { ...state, all_posts: newAllPosts };
    }
    case types.DELETE_DATA:
      const clone = { ...state };
      delete clone[action.id];
      return clone;
    default:
      return state;
  }
};

export default dataReducer;
