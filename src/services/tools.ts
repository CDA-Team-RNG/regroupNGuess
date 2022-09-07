/**
 * Debounce Function prevent the function in parameter to be run again before the timeout end
 * @param {Function} func - The function to be executed
 * @param {number} wait - The amount of time to wait before executing the function.
 * @returns A function that will execute the function passed in after a certain amount of time.
 */
export const debounce = (func: Function, wait: number) => {
  let timeOut: any;

  return function toExcecute(...args: any[]) {
    const withDelay = () => {
      clearTimeout(timeOut);
      func(...args);
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(withDelay, wait);
  };
};
