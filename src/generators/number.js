var _ = require('lodash');
var generator = require('./index');
var basic = require('./basic');

var numberGen = {};

/*Generate an integer upto size. Non negative*/
numberGen.intUpto = (size=100) => Math.floor(Math.random()*size);

/*Generate an integer bounded by [-size, size]*/
numberGen.int = (size=100) => generator.elements([-1, 1])()*numberGen.intUpto(size);

/*Generate a positive Integer*/
numberGen.int.positive = (size=100) => numberGen.intUpto(size) + 1;

/*Choose an integer in the range [min, max], both inclusive in search*/
numberGen.int.choose = numberGen.int.between = (min, max) => generator.elements(_.range(min, max))();

/*Generate a float bounded by [-size, size]*/
numberGen.float = (size=100) => basic.random()*size;

/*Generate a large integer*/
numberGen.int.large = () => Math.floor(Math.random() * Number.MAX_VALUE)

/*Generate an unsigned integer*/
// TODO - no idea why it has to be upto size*size
numberGen.uint = (size=100) => numberGen.intUpto(size * size);

/*Generate a large unsigned integer*/
numberGen.uint.large = () => Math.floor(Math.random() * Number.MAX_VALUE);

generator.extend(numberGen);
module.exports = numberGen;


