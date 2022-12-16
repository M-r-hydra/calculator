// IMPORT FROM INTERFACES
import { I_initialState } from "./interfaces";
// IMPORT FROM INTERFACES

export type DigitButtonProps = {
  className?: string;
  value: string;
  onClick: Function;
};

export type ADD_DIGIT = string;
export type CLEAR = string;
export type DELETE_DIGIT = string;
export type CHOOSE_OPERATION = string;
export type EVALUATE = string;

export type stateReducer = (
  state: I_initialState,
  {}: {
    type: ADD_DIGIT | CLEAR | DELETE_DIGIT | CHOOSE_OPERATION | EVALUATE;
    payload: {
      digit: number;
    };
  }
) => any;

export type digitHandler = (value: string | number) => () => void;
