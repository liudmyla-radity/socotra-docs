/* Use longer descriptive names with multiple words as opposed to shorter abstract or abbreviated names. */
// bad
const isAdded = true;

// good
const isPerilInVehicleExposureAddedOnEndorsement = true;

/* Use camelCase when naming objects, functions, and instances. */
// bad
const OBJecttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}

/* Use PascalCase when naming constructors, classes, interfaces, and typedefs. */
// bad
class user {
  constructor(options) {
    this.name = options.name;
  }
}

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

/* Use “is” or “has” as prefixes when naming boolean variables. */
// bad
const trained = false;
const vacation = true;

// good
const isTrained = false;
const hasVacation = true;

/* Use SCREAMING_SNAKE_CASE only when:
- constant cannot be reassigned,
- constant or property are never to change. */
// bad
const PRIVATE_VARIABLE = "should not be named like this";
export const THING_TO_BE_CHANGED = "should not be uppercased";
let SOME_VARIABLE = "do not use uppercase for variables declared with let";

// good
export const API_KEY = "SOMEKEY";
const MINUTES_IN_HOUR = 60;
