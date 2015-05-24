var flags = require('./')
var lookup = require('./lookup')

var test = require('tape')

test('all the WebGL 1.0 constants', function (t) {
  t.equal(flags.LINEAR, 9729)
  t.equal(flags.NONE, 0)
  t.equal(flags.ONE, 1)
  t.end()
})

test('lookup by number', function (t) {
  t.equal(lookup(9729), 'LINEAR')
  t.equal(lookup(0), 'NONE')
  t.equal(lookup(1), 'ONE')
  t.end()
})
