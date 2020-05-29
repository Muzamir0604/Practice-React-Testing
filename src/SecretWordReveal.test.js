import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import SecretWordReveal from "./SecretWordReveal";

const defaultProps = { display: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

describe("render", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-secret-word-text");
    expect(component.length).toBe(1);
  });
  test("renders no text when `display` prop is false", () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, "component-secret-word-text");
    expect(component.text()).toBe("");
  });
  test("renders `secretWord` when `display` prop is true",()=>{
    const secretWordProp = "train"
    const wrapper =setup({display: true, secretWord:secretWordProp});
    const component =findByTestAttr(wrapper, 'component-secret-word-text');
    expect(component.text()).toContain(secretWordProp);
  });
  test('does not throw warning with expected props',()=>{
    const expectedProps ={ display: false, secretWord:"train"};
    checkProps(SecretWordReveal, expectedProps);
  });
});
