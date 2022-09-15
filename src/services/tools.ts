/**
 * Update state, using choosed useState setter depending of objAttr & cssClass
 * State must use object as value
 * @param {string} objAttr - object attribute
 * @param {any} value - value of the object attribute to udpate
 * @param {Function} stateSetter - state setter
 */
export const updateState = (objAttr: string, value: any, stateSetter: Function) => {
  stateSetter((prevState: any) => {
    return {
      ...prevState,
      [objAttr]: value,
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
export const throttle = (button: HTMLButtonElement, stateSetter: Function, delay: number) => {
  button.disabled = true;
  stateSetter();
  setTimeout(() => {
    return (button.disabled = false);
  }, delay);
};
