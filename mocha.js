module.exports = function add(...rest) {
  let sum = 0;
  rest.forEach(item => {
    sum += item
  })
  return sum;
}