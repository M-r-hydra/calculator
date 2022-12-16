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
  const ACTIONS: I_ReducerActions = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    EVALUATE: "evaluate",
  };
  function reducer(
    state: I_initialState,
    { type, payload }: stateReducerArg2
  ): any {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        console.log(state);
        return {
          ...state,
          currentOperand: `${state?.currentOperand || ""}${payload.digit}`,
        };

      case ACTIONS.CHOOSE_OPERATION:
        switch (payload.operation) {
          case "ac":
            return {
              currentOperand: "",
              prevOperand: "",
              operation: "",
            };
          case "del":
            return {
              ...state,
              currentOperand: String(state.currentOperand).slice(0, -1),
            };

          case "dv":
            return {
              ...state,
              prevOperand: state.currentOperand,
              currentOperand: "",
              operation: "÷",
            };
          case "mul":
            return {
              ...state,
              prevOperand: state.currentOperand,
              currentOperand: "",
              operation: "×",
            };
          case "plus":
            return {
              ...state,
              prevOperand: state.currentOperand,
              currentOperand: "",
              operation: "+",
            };
          case "min":
            return {
              ...state,
              prevOperand: state.currentOperand,
              currentOperand: "",
              operation: "-",
            };

          case "eq":
            const currentOperandCalculator = (
              a: number,
              b: number,
              op: "×" | "÷" | "+" | "-"
            ): number => {
              console.log(op);
              switch (op) {
                case "÷":
                  return a / b;
                case "-":
                  return a - b;
                case "×":
                  return a * b;
                case "+":
                  return a + b;
              }
            };
            switch (state.operation) {
              case "-":
                return {
                  currentOperand: currentOperandCalculator(
                    Number(state.prevOperand),
                    Number(state.currentOperand),
                    "-"
                  ),
                };
              case "+":
                return {
                  currentOperand: currentOperandCalculator(
                    Number(state.currentOperand),
                    Number(state.prevOperand),
                    "+"
                  ),
                };
              case "÷":
                return {
                  currentOperand: currentOperandCalculator(
                    Number(state.prevOperand),
                    Number(state.currentOperand),
                    "÷"
                  ),
                };
              case "×":
                return {
                  currentOperand: currentOperandCalculator(
                    Number(state.currentOperand),
                    Number(state.prevOperand),
                    "×"
                  ),
                };
              default:
                console.log(state.operation + "Not Found !");
                return;
            }
          default:
            console.log("defult of choose OP");
            console.log(payload);
            return state;
        }
      default:
        return state;
    }
  }
  const initialState: I_initialState = {
    currentOperand: "",
    prevOperand: "",
    operation: "",
  };
  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    { ...initialState }
  );
  const digitButtons: DigitButtonProps[] = [
    {
      dispatch: () =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "ac" },
        }),
      value: "AC",
      className: "span-two",
    },
    {
      dispatch: () =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "del" },
        }),
      value: "DEL",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "dv" },
        }),
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
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "mul" },
        }),
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
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "plus" },
        }),
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
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "min" },
        }),
      value: "-",
      className: "",
    },
    {
      dispatch: () =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "dot" },
        }),
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
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: "eq" },
        }),
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
