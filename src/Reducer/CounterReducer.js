import { INC, DEC } from "../Actions/ActionTypeConst";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
