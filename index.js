const x = {foo: 1, bar: 2 }
const result = Object.keys(x)
  .filter(Boolean)
  .reduce((acc, key) => ({ ...acc, ...x[key] }), {});

console.log(result)