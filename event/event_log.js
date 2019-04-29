const EventEmitter = require("events");
const uuid = require("uuid");

class EventLogger extends EventEmitter {
  // formatting data
  log(msg) {
    // triggering message event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = EventLogger;
