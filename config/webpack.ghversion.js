var path = require('path')
var config = require('./webpack.gh')
var iPackage = require('../package.json')
config.output.path = path.join(__dirname, '../output', iPackage.version)
console.log(config)
module.exports = config
