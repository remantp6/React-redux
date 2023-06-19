import { INC, DEC } from "./ActionTypeConst";

//Action creator
export const increaseCounter = (num) => {
  return {
    type: INC, //it is only convention to give const value to action type
    payload: num,
  };
};
export const decreaseCounter = () => {
  return {
    type: DEC,
  };
};
