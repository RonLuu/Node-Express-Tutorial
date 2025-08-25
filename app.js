// CommonJS - every file is a module
// Modules - Encapsulated Code
const name = require('./4-name')
console.log(name)
const sayHi = require('./5-utils')
sayHi("Susan")
sayHi(name.john)
sayHi(name.peter)