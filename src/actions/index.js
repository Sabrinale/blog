export const ADD_DATA = "ADD_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const addData = (data, id) => {
  return {
    type: ADD_DATA,
    data,
    id
  };
};

export const editData = (data, id) => {
  return {
    type: EDIT_DATA,
    data,
    id
  };
};

export const deleteData = id => {
  return {
    type: DELETE_DATA,
    id
  };
};
