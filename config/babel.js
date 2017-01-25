var fs = require('fs')
var config = fs.readFileSync(__dirname, '/../.babelrc')
config = JSON.parse(config)
module.exports = config
