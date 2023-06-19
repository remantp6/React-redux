import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "./Actions/Action";

const App = () => {
  const myState = useSelector((state) => state.counterReducer); //useSelector hook is used to extract the counterReducer state from the Redux store and  value of state.counterReducer is hold on myState variable
  const dispatch = useDispatch(); //useDispatch hook is used to get the dispatch function from the Redux store, which allows us to dispatch actions.
  return (
    <>
      <div className="counter_section">
        <h2>Increment and Decrement counter</h2>
        <h4>React-Redux</h4>
        <div className="counter">
          <div
            className="decrement"
            onClick={() => dispatch(decreaseCounter())}
          >
            <span>-</span>
          </div>
          <input type="text" name="input_field" value={myState.counter} />{" "}
          {/*specifying property of the state object returned by useSelector hook*/}
          <div
            className="increment"
            onClick={() => dispatch(increaseCounter(5))}
          >
            <span>+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
