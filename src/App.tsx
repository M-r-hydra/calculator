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
  digitHandler,
  stateReducer,
} from "./models/customTypes";
import { I_initialState, I_ReducerActions } from "./models/interfaces";
// Models

const App = () => {
  const digitClickHandler: digitHandler = (value) => {
    return () => {};
  };
  const digitButtons: DigitButtonProps[] = [
    {
      onClick: digitClickHandler(1),
      value: "AC",
      className: "span-two",
    },
    {
      onClick: digitClickHandler(1),
      value: "DEL",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "/",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "1",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "2",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "3",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "*",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "4",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "5",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "6",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "+",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "7",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "8",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "9",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "-",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: ".",
      className: "",
    },
    {
      onClick: digitClickHandler(1),
      value: "0",
      className: "",
    },

    {
      onClick: digitClickHandler(1),
      value: "=",
      className: "span-two",
    },
  ];

  const ACTIONS: I_ReducerActions = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    EVALUATE: "evaluate",
  };

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
          onClick={item.onClick}
          value={item.value}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default App;
