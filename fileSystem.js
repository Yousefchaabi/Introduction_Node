const fs = require("fs");
const path = require("path");

const filePath = path.resolve("content", "welcome.txt");
fs.writeFileSync(filePath, "Hello Node");
