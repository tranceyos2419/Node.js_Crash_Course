const EventEmitter = require("events");

// making a class
class MyEmitter extends EventEmitter {}
class YourEmitter extends EventEmitter {}

// making an instance
const myEmitter = new MyEmitter();
const myEmitter_01 = new MyEmitter();
const yourEmitter = new YourEmitter();

// Event listener
myEmitter.on("event", () => console.log("Event"));
myEmitter.on("message", () => console.log("message"));
// myEmmiter_01
myEmitter_01.on("event", () => console.log("Event_01"));
// yourEmmiter
yourEmitter.on("event", () => console.log("yourEmitter"));

// trigger event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("message");
// myEmmiter_01
myEmitter_01.emit("event");
// yourEmmiter
yourEmitter.emit("event");
