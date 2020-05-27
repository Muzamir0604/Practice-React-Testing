import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param  {type} state  {description}
 * @param  {type} action {description}
 * @return {type} {description}
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
