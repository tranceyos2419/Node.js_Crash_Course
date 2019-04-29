const fs = require("fs");
const path = require("path");

// Create a folder
//! this is async
fs.mkdir(path.join(__dirname, "yoshi"), {}, err => {
  if (err) throw err;
  console.log("Folder created...");
});

// Create and write to file
let str = "hello world";
fs.writeFile(path.join(__dirname, "/yoshi", "hello.txt"), str, err => {
  if (err) throw err;
  console.log("file written to ...");

  //append
  let append = "I love JavaScript";
  fs.appendFile(path.join(__dirname, "/yoshi", "hello.txt"), append, err => {
    if (err) throw err;
    console.log("file was appended");
    // read a file
    fs.readFile(__dirname + "/yoshi/hello.txt", (err, data) => {
      if (err) throw err;
      console.log(data.toString());
    });
  });
});

//* the differences throw and throw new error()
// link:https://stackoverflow.com/questions/9156176/what-is-the-difference-between-throw-new-error-and-throw-someobject

// throw "I'm Evil"
// Throw will terminate the further execution & expose message string on catch the error.

// try{
//     throw 'I\'m Evil'
//     console.log('You\'ll never reach to me', 123465)
// }
// catch(e){
//     console.log(e); //I\'m Evil
// }
// Console after throw will never be reached cause of termination.

// throw new Error("I'm so sweet")
// throw new Error exposes an error event with two params name & message. It also terminate further execution

// try{
//      throw new Error('I\'m Evil')
//      console.log('You\'ll never reach to me', 123465)
// }
// catch(e){
//         console.log(e.name, e.message); //Error, I\'m Evil
// }
