import { actionTypes } from "../actions";
/**
 * @function {function name}
 * @param  {type} state  {description}
 * @param  {type} action {description}
 * @return {type} {description}
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
