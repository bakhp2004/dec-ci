const { createServer } = require("./app");

createServer().listen(3000, () => {
  console.log("Listening on 3000");
});