import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessWordsReducer";
import secretWord from "./secretWordReducer";
import gaveUp from "./gaveUpReducer";
import userEnter from "./userEntryReducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  gaveUp,
  userEnter,
});
