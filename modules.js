// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)4
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
require('./mind-grinade');
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)