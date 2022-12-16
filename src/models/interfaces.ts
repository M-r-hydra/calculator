export interface I_initialState {
  currentOperand: string | number;
  prevOperand: string | number;
  operation: string;
}

export type stateReducer = (
  state: I_initialState,
  {}: {
    type: ADD_DIGIT | CLEAR | DELETE_DIGIT | CHOOSE_OPERATION | EVALUATE;
    payload: {
      digit: number;
    };
  }
) => any;

type ADD_DIGIT = string;
type CLEAR = string;
type DELETE_DIGIT = string;
type CHOOSE_OPERATION = string;
type EVALUATE = string;

export interface I_ReducerActions {
  ADD_DIGIT: ADD_DIGIT;
  CLEAR: CLEAR;
  DELETE_DIGIT: DELETE_DIGIT;
  CHOOSE_OPERATION: CHOOSE_OPERATION;
  EVALUATE: EVALUATE;
}
