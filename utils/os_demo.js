const os = require("os");

//* try these command on terminal by typing "node"

// Platform
console.log(`platform: `, os.platform());

// cpu arch
console.log(`cpu architecture:`, os.arch());

// cpu core info
console.log("cpu core ifo;", os.cpus());

// free memory
console.log("free memory:", os.freemem());

// total memory
console.log("os total memory:", os.totalmem());

// home dir
console.log("home directory:", os.homedir());

// Uptime
console.log("uptime:", os.uptime());
