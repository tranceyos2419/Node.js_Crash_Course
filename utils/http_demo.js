const http = require("http");

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end(); //end the response
  })
  .listen(5000, () => console.log("listening port 5000"));
