import CheckPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/reducers";

/** Create a testing store with imported reducers, middleware and initial state.
 * @function storeFactory
 * @param  {object} initialState {description}
 * @return {Store} {description}
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = CheckPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
