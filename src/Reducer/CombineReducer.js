import counterReducer from "./CounterReducer";
import { combineReducers } from "redux";

//in case of multiple reducers
const rootReducer = combineReducers({
  counterReducer,
  //we can add here multiple
});

export default rootReducer;
