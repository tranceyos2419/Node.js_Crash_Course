const path = require("path");

// Base file name
console.log(`Base file name: ${path.basename(__filename)}`);

// Directory name
console.log(`Directory name: ${path.dirname(__filename)}`);

// Create path object
console.log(`Path object: ${JSON.stringify(path.parse(__filename))}`);

// Concatenate path
// this is useful for cross-platform
console.log(`Concatenate path: ${path.join(__dirname, "test", "hello.html")}`);
