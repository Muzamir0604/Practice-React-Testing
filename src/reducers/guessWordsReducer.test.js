import {actionTypes} from "../actions";
import guessWordsReducer from "./guessWordsReducer";

test("returns state o `[]` upon receiving an action of type `RESET_GAME`",()=>{
    //start with non-zero guessedwords
    const initialState = [{guessedWord: 'train', letterMatchCount:3}];
    const newState = guessWordsReducer(initialState, {type:actionTypes.RESET_GAME});
    expect(newState).toEqual([]);
});