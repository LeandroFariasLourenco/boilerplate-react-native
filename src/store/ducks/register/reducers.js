import * as t from './types';

const INITIAL_STATE = {
  step: 0,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.NEXT_STEP:
    return {
      ...state,
      step: payload,
    };
  default:
    return state;
  }
}
