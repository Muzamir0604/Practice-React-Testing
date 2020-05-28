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
  test("`guessWord` runs on Submit button clicked", () => {
    const guessWordMock = jest.fn();
    const props = {
      success: false,
      guessWord: guessWordMock,
    };

    //set up input with guessWordMock as guessWord prop
    const wrapper = shallow(<UnconnectedInput {...props} />);

    //simulate submit click
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");
    //check to see if guessWordMock ran
    expect(guessWordMock).toHaveBeenCalledTimes(1);
  });
});
