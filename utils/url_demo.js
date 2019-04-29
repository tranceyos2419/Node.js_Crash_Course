// const url = require("url");

const myUrl = new URL(
  `https://nodejs.org:8000/api/url.html?id=100&status=active`
);

// Serialized URL
console.log("URL:", myUrl);
console.log(`URL:${myUrl}`);
console.log("URL:", myUrl.toString());
console.log("URL:", myUrl.href);

// Host (root domain)
console.log("hostname", myUrl.host);

// Hostname (does not get port)
console.log("hostname", myUrl.hostname);

//path name
console.log("Pathname", myUrl.pathname);

// Add params
myUrl.searchParams.append("abc", "123");

// Loop through params
console.log("Loop through params");
myUrl.searchParams.forEach((name, value) => console.log(`${name}:${value}`));
