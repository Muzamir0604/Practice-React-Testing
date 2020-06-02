import { actionTypes } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.ENTERING:
      return "InProgress";
    case actionTypes.ENTERED:
      return "Done";
    case actionTypes.RESET_GAME:
      return null;
    default:
      return state;
  }
};
