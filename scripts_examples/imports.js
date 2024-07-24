/* Import from the same file */
// bad
const { getAddress } = require("../lib/autofill/lib/utils.js");
const { getFieldValue } = require("../lib/autofill/lib/utils.js");

// good
const { getAddress, getFieldValue } = require("../lib/autofill/lib/utils.js");


/* Use destructuring to improve code readability
Use camelCase for new module import names */
// bad
require("../lib/autofill/lib/utils.js");

// bad
const { GetAddress } = require("../lib/autofill/lib/utils.js");
const { get_address } = require("../lib/autofill/lib/utils.js");
const { GET_ADDRESS } = require("../lib/autofill/lib/utils.js");

// good
const { getAddress, getFieldValue } = require("../lib/autofill/lib/utils.js");


/* Group and organize imports in following way:
- external dependencies,
- internal dependencies,
- local imports */
// bad
const { getFieldValue } = require("../../utils.js");
const polTaxFields = require("./polTaxFields.js");
const { auxKey } = require("../../constants.js");
const uniq = require("lodash");

// good
const uniq = require("lodash");

const { getFieldValue } = require("../../utils.js");
const { auxKey } = require("../../constants.js");

const polTaxFields = require("./polTaxFields.js");
