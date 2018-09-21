import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import idReducer from "./idReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  id: idReducer
});

export default rootReducer;
