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

  const digitButtons: DigitButtonProps[] = [
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "AC",
      className: "span-two",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "DEL",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "/",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "1",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "2",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "3",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "*",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "4",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "5",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "6",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "+",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "7",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "8",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "9",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "-",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: ".",
      className: "",
    },
    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "0",
      className: "",
    },

    {
      dispatch: () => digitClickHandler(ACTIONS.ADD_DIGIT, { digit: 1 }),
      value: "=",
      className: "span-two",
    },
  ];

  function reducer(
    state: I_initialState,
    { type, payload }: stateReducerArg2
  ): any {
    if (type === ACTIONS.ADD_DIGIT) {
      console.log(payload);
      return {
        ...state,
        currentOperand: 1,
      };
    } else {
      console.log("else");
    }
  }

  function digitClickHandler(type: string, payload: { digit: number }): any {
    dispatch({
      type,
      payload,
    });
  }

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
          dispatch={() =>
            dispatch({
              type: ACTIONS.ADD_DIGIT,
              payload: {
                digit: 1,
              },
            })
          }
          value={item.value}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default App;
