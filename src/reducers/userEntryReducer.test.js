import { actionTypes } from "../actions";
import userEntryReducer from "./successReducer";

test('returns initial state of `Null` when no action is passed',()=>{
    const newState= userEntryReducer(undefined,{})
    expect(newState).toBeNull()
})
test('returns state of `In Progress` upon receving an action type of `Entering`',()=>{
    const newState = userEntryReducer(undefined,{
        type: actionTypes.ENTERING,
    });
    expect(newState).toBe("InProgress");
});
test("returns state of `Done` upon receving an action type of `ENTERED`",()=>{
    const newState =  userEntryReducer("InProgress",{
        type: actionTypes.ENTERED,
    });
    expect(newState).toBe("Done")
})
test('returns state of `null` upon receiving an action of type `RESET_GAME`', () => {
    // state is most likely to be 'done' at this point
    const newState = userEntryReducer("Done", { type: actionTypes.RESET_GAME });
    expect(newState).toBeNull();
  });