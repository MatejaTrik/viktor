var util = require('util')

var name = 'Tony'
var greeting = util.format('hello, %s', name)
util.log(greeting)