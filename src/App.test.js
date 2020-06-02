import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from "./App";

/**
 * @function setup
 * @param  {object} state state for this setup
 * @return {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  let wrapper;
  const success = false;
  const gaveUp = false;
  const secretWord = "party";
  const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
  const userEnter = null;
  beforeEach(() => {
    wrapper = setup({
      success,
      gaveUp,
      secretWord,
      guessedWords,
      userEnter,
    });
  });
  test("has access to `success` state", () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `gaveUp` state',()=>{
    const gaveUpProp =  wrapper.instance().props.gaveUp;
    expect(gaveUpProp).toBe(gaveUp);
  });
  test("has access to `secretWord` state", () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("has access to `guessWord` state", () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test("has access to `userEnter` state",()=>{
    const userEnterProps = wrapper.instance().props.userEnter;
    expect(userEnterProps).toEqual(userEnter)
  })
  test("`getSecretWord` action creator is a function on the props", () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
  test("`resetGame` action creator is a function on the props", () => {
    const resetGameProp = wrapper.instance().props.resetGame;
    expect(resetGameProp).toBeInstanceOf(Function);
  });
  test("`setUserEntering` action creator is a function on the props", () => {
    const setUserEnteringProp = wrapper.instance().props.setUserEntering;
    expect(setUserEnteringProp).toBeInstanceOf(Function);
  });
  test("`setUserSecretWord` action creator is a function on the props", () => {
    const setUserSecretWordProp = wrapper.instance().props.setUserSecretWord;
    expect(setUserSecretWordProp).toBeInstanceOf(Function);
  });
  
});

test("`getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };
  //set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  expect(getSecretWordMock).toHaveBeenCalledTimes(2);
});
