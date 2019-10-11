const CSSwhat = require('css-what');

const selectorList = CSSwhat.parse("#outer[DATA=11] .inner DIV");
console.log(selectorList);


const selector = CSSwhat.stringify(selectorList);
console.log(selector);
