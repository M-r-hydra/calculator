// React
import React, { useReducer } from "react";
// React
// CSS
import "./App.css";
import DigitButton from "./Components/DigitButton/DigitButton";
// CSS
// Models
import {
  DigitButtonProps,
  digitDispatchHandler,
  stateReducer,
} from "./models/customTypes";
import { I_initialState, I_ReducerActions } from "./models/interfaces";
// Models

const App = () => {
  const digitClickHandler: digitDispatchHandler = ({ type }, { digit }) => {
    return () => {};
  };
  const ACTIONS: I_ReducerActions = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    EVALUATE: "evaluate",
  };

  const digitButtons: DigitButtonProps[] = [
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "AC",
      className: "span-two",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "DEL",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "/",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "1",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "2",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "3",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "*",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "4",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "5",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "6",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "+",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "7",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "8",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "9",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "-",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: ".",
      className: "",
    },
    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "0",
      className: "",
    },

    {
      dispatch: () =>
        digitClickHandler({ type: ACTIONS.ADD_DIGIT }, { digit: 2 }),
      value: "=",
      className: "span-two",
    },
  ];

  const reducer: stateReducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentOperand: `${currentOperand || ""}${payload.digit}`,
        };
    }
  };

  const initialState: I_initialState = {
    currentOperand: "",
    prevOperand: "",
    operation: "",
  };

  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {prevOperand} {operation}
        </div>
        <div className="current-operand"></div>
      </div>
      {digitButtons.map((item) => (
        <DigitButton
          key={item.value}
          dispatch={item.dispatch}
          value={item.value}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default App;
