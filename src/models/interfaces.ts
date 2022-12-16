// IMPORT FROM CUSTOM TYPES
import {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
} from "./customTypes";
// IMPORT FROM CUSTOM TYPES

export interface I_initialState {
  currentOperand: string | number;
  prevOperand: string | number;
  operation: string;
}

export interface I_ReducerActions {
  ADD_DIGIT: ADD_DIGIT;
  CLEAR: CLEAR;
  DELETE_DIGIT: DELETE_DIGIT;
  CHOOSE_OPERATION: CHOOSE_OPERATION;
  EVALUATE: EVALUATE;
}

export interface I_digitButtons {
  value: string;
}
