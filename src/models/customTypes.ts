import { I_initialState } from "./interfaces";
// IMPORT FROM INTERFACES
// IMPORT FROM INTERFACES

export type DigitButtonProps = {
  className?: string;
  value: string;
  dispatch: any;
};

export type ADD_DIGIT = string;
export type CLEAR = string;
export type DELETE_DIGIT = string;
export type CHOOSE_OPERATION = string;
export type EVALUATE = string;

export type stateReducerArg2 = {
  type: ADD_DIGIT | CLEAR | DELETE_DIGIT | CHOOSE_OPERATION | EVALUATE;
  payload: {
    digit?: number;
    operation?: string;
  };
};

export type digitDispatchHandler = (
  {}: {
    type: ADD_DIGIT | CLEAR | DELETE_DIGIT | CHOOSE_OPERATION | EVALUATE;
  },
  payload: {
    digit: number;
  }
) => {};
