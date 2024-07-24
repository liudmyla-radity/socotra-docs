/* For CommonJS keep file structure organized the following way: */
// imports
const { uniq } = require("lodash");
const { auxKey } = require("../../constants.js");
const { getTableValues } = require("../../utils.js");

// constants (if not imported)
const myFirstConstant = "my constant";

// core logic
const logOne = (title, message) => {
  console.log(`${title}:${JSON.stringify(message)}`);
};

// main exports
module.exports = {
  log,
};


/* For ES Modules keep file structure organized the following way: */
// imports
import { uniq } from "lodash";
import { auxKey } from "../../constants.js";
import { getTableValues } from "../../utils.js";

// constants (if not imported)
const mySecondConstant = "my constant";

// main exports
export const waitingPeriodFactorCalculate = (
  locFilingSetId,
  polBiWaitingPeriod
) => {
  return getTableValues(CF13, [locFilingSetId, polBiWaitingPeriod])?.Factor;
};

// core logic
const logTwo = (title, message) => {
  console.log(`${title}:${JSON.stringify(message)}`);
};
