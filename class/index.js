//* Module wrapper function
// all of js files are wrapped by this function
// because of this function, js files can access to module.exports or require functions
//! (function(exports, require, module, __filename, __dirname) {});

//! run this latter than v11.6.0

console.log(`dirname ${__dirname}`);
console.log(`filename ${__filename}`);

// person
const Person = require("./person");
const person1 = new Person("Yoshi", 24);
// person1.greeting();
