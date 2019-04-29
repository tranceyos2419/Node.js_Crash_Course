const EventEmitter = require("events");

// making a class
class MyEmitter extends EventEmitter {}

// making an instance
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("Event"));

// trigger event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
