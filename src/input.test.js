import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

/**
 * Factory functio create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param  {object} initialState - Initial state for this setup.
 * @return {ShallowWrapper} {description}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  //using wrapper.debug is handy to see rendered code
//   console.log(wrapper.debug());
  return wrapper
};
setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit buttons", () => {});
  });
  describe("word has been guessed", () => {
    test("does not renders component without error", () => {});
    test("does not renders input box", () => {});
    test("does not renders submit buttons", () => {});
  });
});

describe("update state", () => {});
