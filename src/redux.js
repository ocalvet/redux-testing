import { createStore } from "redux";

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increaseCounter = { type: INCREASE_COUNTER };
export const decreaseCounter = { type: DECREASE_COUNTER };

export const counter = (state = 0, action) => {
  switch(action.type) {
    case INCREASE_COUNTER:
      return state++;
    case DECREASE_COUNTER:
      return state--;
    default:
      return state
  }
};

export const storeCreator = () => {
  return createStore(counter);
};
