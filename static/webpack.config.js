const path = require("path");

module.exports = {
  "mode": "production",
  "entry": "./src/Main.js",
  "output": {
    "path": __dirname+'/build',
    "filename": "[name].js"
  }
}
