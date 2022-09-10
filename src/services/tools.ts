/**
 * Update state, using choosed useState setter depending of objAttr & cssClass
 * State must use object as value
 * @param {string} objAttr - object attribute
 * @param {string} cssClass - css class
 * @param {Function} stateSetter - state setter to use
 */
export const updateState = (objAttr: string, cssClass: string, stateSetter: Function) => {
  stateSetter((prevState: any) => {
    return {
      ...prevState,
      [objAttr]: cssClass,
    };
  });
};

/**
 * Throttle function,  Create a delay during which the button is disabled after a state change
 * ( prevent potential css animation issue if button spam is possible )
 * @param {any} button - any - the button ( coming from event.currentTarget )
 * @param {any} stateSetter - useState setter
 * @param {number} delay - timeout delay
 */
export const throttle = (button: any, stateSetter: any, delay: number) => {
  button.disabled = true;
  stateSetter((prev: any) => !prev);
  setTimeout(() => {
    return (button.disabled = false);
  }, delay);
};
