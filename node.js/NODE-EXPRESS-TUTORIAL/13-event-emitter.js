// npm - global command, comes with node
// npm --version 

// local dependency - use it only in this particular project
// npm i <ime package koji zleimo da instaliramo>

// gllobal dependancy - use it in any project
// npm install -g <pacakge name>
// npm sudo install -g <pacakage name> 

const _ = require('loadash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);