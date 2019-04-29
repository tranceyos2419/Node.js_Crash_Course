const Logger = require("./event_log");

const logger = new Logger();

// making a listener
logger.on("message", data => console.log(`Out message`, data));

// calling function of EventLogger class
logger.log("hello");
