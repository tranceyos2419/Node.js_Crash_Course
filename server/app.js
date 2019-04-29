// dynamic file path
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5001;

// create server
http
  .createServer((req, res) => {
    // build dynamic file path
    let filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );
    console.log(filePath);

    // check extension
    let extName = path.extname(filePath);
    console.log("extname ", extName);

    // build content type
    let contentType;
    switch (extName) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
      default:
        contentType = "text/html";
        break;
    }
    console.log(contentType);

    // read file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == "ENOENT") {
          // Page not found
          let path404 = path.join(__dirname, "public", "404.html");
          fs.readFile(path404, (err, res404) => {
            //! without content-type, it return string
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(res404, "utf8");
          });
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      }
      // no error
      res.writeHead(200, contentType);
      res.end(content);
    });
  })
  .listen(PORT, console.log(`listening: ${PORT}`));
