/**
 * Update state, using choosed useState setter depending of objAttr & cssClass
 * State must use object as value
 * @param {string} objAttr - object attribute
 * @param {string} cssClass - css class
 * @param {Function} stateSetter - state setter to use
 */
export const updateState = (objAttr: string, cssClass: string, stateSetter: Function) => {
  stateSetter((prevCssClassSwitch: any) => {
    return {
      ...prevCssClassSwitch,
      [objAttr]: cssClass,
    };
  });
};
