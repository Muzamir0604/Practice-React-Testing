import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

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
        const component =  findByTestAttr(wrapper,"component-input");
        expect(component.length).toBe(1)
    });
    test("renders input box", () => {
        const inputBox =  findByTestAttr(wrapper,"input-box");
        expect(inputBox.length).toBe(1)
    });
    test("renders submit buttons", () => {
        const submitButton =  findByTestAttr(wrapper,"submit-button");
        expect(submitButton.length).toBe(1)
    });
  });
  describe("word has been guessed", () => {
      let wrapper;
      beforeEach(()=>{
          const initialState = { success: true};
          wrapper = setup(initialState)
      })
    test("renders component without error", () => {
        const component = findByTestAttr(wrapper,"component-input");
        expect(component.length).toBe(1)
    });
    test("does not renders input box", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        expect(inputBox.length).toBe(0);
    });
    test("does not renders submit buttons", () => {
        const submitButton = findByTestAttr(wrapper,"submit-button");
        expect(submitButton.length).toBe(0)
    });
  });
});

describe("update state", () => {});
