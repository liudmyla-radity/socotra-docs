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


/* Avoid:
-	meaningless distinction (for ex., ProductInfo or ProductData in the same code);
-	single-letter variable names;
-	general words (like data, peril, value etc.);
-	using the same word for two purposes (for ex., same term in 2 for loops);
-	using negative participle ‘not’ (name the variable isPremiumIncluded instead of isPremiumNotIncluded).*/

// bad
for (var i = 0; i < 10; i++) {
  callSomeFunction();
}

const exposures = data.updates.addExposures?.filter((exposure) =>
  buildingKeys.includes(exposure.exposureName)
);

for (exposure in targetExposures) {
  let targetExposure;

  if (exposure.updatePerils?.length > 0) {
    targetExposure = exposure;
  }
}

const isPremiumNotIncluded = true;

// good
for (var vehicleQuantity = 0; vehicleQuantity < 10; vehicleQuantity++) {
  callSomeFunction();
}

const addedBuildingExposures = data.updates.addExposures?.filter((exposure) =>
  buildingKeys.includes(exposure.exposureName)
);

for (vehicleExposure in allVehicleExposures) {
  let vehicleExposureWithUpdatedPerls;

  if (vehicleExposure.updatePerils?.length > 0) {
    vehicleExposureWithUpdatedPerls = vehicleExposure;
  }
}

const isPremiumIncluded = false;
