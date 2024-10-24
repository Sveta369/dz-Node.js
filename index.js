const add = require("./add");
const multiply = require("./multiply");

let num1 = parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);
let operation = process.argv[4];

const operations = {
  add: add,
  multiply: multiply,
};

const result = operations[operation](num1, num2);
console.log(`${result}`);
