/* Document each function like this */

/**
 * Sets auxiliary data in the Socotra API for the specified locator, key, and value.
 *
 * Note: This function is intended for internal use and should only be called when not in RATER_DEBUG_MODE.
 * @param {string} locator - The locator identifying the context for which auxiliary data is being set.
 * @param {string} key - The key associated with the auxiliary data.
 * @param {any} value - The value to be set for the specified key in the auxiliary data.
 * @returns {void}
 * @example
 * this.setAuxData('exampleLocator', 'exampleKey', 'exampleValue');
 */
const setAuxData = (locator, key, value) => {
  // @ts-ignore - Ignoring TypeScript check due to dynamic nature of this function
  // Ignoring ESLint check for no-undef as it is known to be defined at runtime
  // eslint-disable-next-line no-undef
  socotraApi.setAuxData(locator, key, value);
};

/* Use single responsibility design principle. */
// bad
const getFirstOrLastValueIfArray = (valueType, arg) => {
  if (valueType === "first") {
    return Array.isArray(arg) ? arg[0] : arg;
  } else {
    return Array.isArray(arg) ? arg.at(-1) : arg;
  }
};

// good
const getFirstValueIfArray = (arg) => {
  return Array.isArray(arg) ? arg[0] : arg;
};

const getLastValueIfArray = (arg) => {
  return Array.isArray(arg) ? arg.at(-1) : arg;
};
