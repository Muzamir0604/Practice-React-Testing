import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import TotalGuessed from "./TotalGuessed";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuessed {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(TotalGuessed, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
    component = findByTestAttr(wrapper, "component-total-guessed");
  });
  test("render without error", () => {
    expect(component.length).toBe(1);
  });
  test("renders 0", () => {
    expect(component.text()).toContain(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  let wrapper;
  let component;
  beforeEach(()=>{
      wrapper = setup({guessedWords})
      component = findByTestAttr(wrapper,"component-total-guessed");
  });
  test('test render without error',()=>{
      expect(component.length).toBe(1);
  });
  test('render number of `guessedwords`',()=>{
      expect(component.text()).toContain(3);
  })
});
