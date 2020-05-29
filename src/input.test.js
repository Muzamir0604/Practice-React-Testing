import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

//Consider looking into redux-mock-store
/**
 * Factory functio create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param  {object} initialState - Initial state for this setup.
 * @return {ShallowWrapper} {description}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  //using wrapper.debug is handy to see rendered code
  //   console.log(wrapper.debug());
  return wrapper;
};
setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit buttons", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not renders submit buttons", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    //setting up mock for `guessWord`
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };
    //set up input with guessWordMock as guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />);

    // add value to input
    wrapper.setState({ currentGuess: guessedWord });

    //simulate submit click
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });
  test("`guessWord` runs on Submit button clicked", () => {
    //check to see if guessWordMock ran
    expect(guessWordMock).toHaveBeenCalledTimes(1);
  });
  test('calls `guessWord` with input value as argument', ()=>{
    // console.log(guessWordMock.mock.calls)
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test('clears input box on submit',()=>{
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
