import { INCREMENT } from "./Actiontype";
import { DECREMENT } from "./Actiontype";



export const addCount = (number = 1) => {
  return {
    type: INCREMENT,
    payload: number,
  }
}

export const subCount = (number = 1) => {
  return {
    type: DECREMENT,
    payload: number,
  }
}

