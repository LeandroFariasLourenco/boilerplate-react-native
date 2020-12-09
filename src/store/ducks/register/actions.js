import * as t from './types';

export const setNextStep = (stepNumber) => ({
  type: t.NEXT_STEP,
  payload: stepNumber
});
