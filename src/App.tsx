// React
import React, { useReducer } from "react";
// React
// CSS
import "./App.css";
import DigitButton from "./Components/DigitButton/DigitButton";
// CSS
// Models
import { DigitButtonProps, stateReducerArg2 } from "./models/customTypes";
import { I_initialState, I_ReducerActions } from "./models/interfaces";
// Models

const App = () => {
  const initialState: I_initialState = {
    currentOperand: "",
    prevOperand: "",
    operation: "",
  };

  const ACTIONS: I_ReducerActions = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    EVALUATE: "evaluate",
  };

  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function reducer(
    state: I_initialState,
    { type, payload }: stateReducerArg2
  ): any {
    if (type === ACTIONS.ADD_DIGIT) {
      console.log(payload);
      return {
        ...state,
        currentOperand: payload.digit,
      };
    } else {
      console.log("else");
    }
  }
  const digitButtons: DigitButtonProps[] = [
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } }),
      value: "AC",
      className: "span-two",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } }),
      value: "DEL",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } }),
      value: "/",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } }),
      value: "1",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 2 } }),
      value: "2",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 3 } }),
      value: "3",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 5 } }),
      value: "*",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 4 } }),
      value: "4",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 5 } }),
      value: "5",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 6 } }),
      value: "6",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 9999 } }),
      value: "+",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 7 } }),
      value: "7",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 8 } }),
      value: "8",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 9 } }),
      value: "9",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 55555 } }),
      value: "-",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 55256652 } }),
      value: ".",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 0 } }),
      value: "0",
      className: "",
    },

    {
      dispatch: () =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 6552 } }),
      value: "=",
      className: "span-two",
    },
  ];

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {prevOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      {digitButtons.map((item) => (
        <DigitButton
          key={item.value}
          dispatch={() => item.dispatch()}
          value={item.value}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default App;
