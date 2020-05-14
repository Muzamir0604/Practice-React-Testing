/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper 
 * @param {string} val
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
