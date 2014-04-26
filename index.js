var Filter = require('broccoli-filter')
var transpiler = require('./lib/sass2scss.js')
module.exports = Sass2scss
Sass2scss.prototype = Object.create(Filter.prototype)
Sass2scss.prototype.constructor = Sass2scss
function Sass2scss (inputTree) {
  if (!(this instanceof Sass2scss)) return new Sass2scss(inputTree)
  Filter.call(this, inputTree)
}

Sass2scss.prototype.extensions = ['css.sass', 'sass']
Sass2scss.prototype.targetExtension = 'scss'

Sass2scss.prototype.processString = function (string) {
  var result = transpiler(string)
  return result
}