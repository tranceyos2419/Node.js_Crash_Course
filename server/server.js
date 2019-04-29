const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

//? with async await
// const readFile = readPath => {
//   new Promise((resolve, reject) => {
//     fs.readFile(readPath, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// };

http
  .createServer(async (req, res) => {
    switch (req.url) {
      case "/":
        const readPath = path.join(__dirname, "public", "Home.html");
        fs.readFile(readPath, (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
        //? with async await
        // const html = await readFile(readPath);
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(data);
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Content is not found");
        break;
    }
  })
  .listen(PORT, () => console.log(`listening port:${PORT}`));
