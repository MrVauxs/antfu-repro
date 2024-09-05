/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */

const x = { foo: 1, bar: 2 }
const result = Object.keys(x)
  .reduce((acc, key) => ({ ...acc, ...x[key] }), {})
