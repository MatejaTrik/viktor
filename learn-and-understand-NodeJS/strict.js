'use strict'

var EventEmitter = require('events')
var util = require('util')

function Greetr() {
    EventEmitter.call(this)
    this.greeting = 'hello world'


}

util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data)
}