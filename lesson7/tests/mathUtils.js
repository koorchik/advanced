var mathUtils = require('../src/mathUtils');
var chai      = require('chai')
var chaiStats = require('chai-stats');

chai.use(chaiStats);

var assert = chai.assert;

suite('mathUtils average');

test('Positive: mathUtils.average([3,4,5])', function() {
    assert.almostEqual( mathUtils.average([3,4,5]), 4);
});

test('Positive: mathUtils.average([1,10,33, 44444, 10000000000])', function() {
    assert.almostEqual( mathUtils.average([1,10,33, 44444, 10000000000]), 2000008897.6);
});

test('Positive: mathUtils.average([1.5, 2.5, 3.5])', function() {
    assert.almostEqual( mathUtils.average([1.5, 2.5, 3.5]), 2.5);
});

test('Positive: mathUtils.average([-2, -3, -4])', function() {
    assert.almostEqual( mathUtils.average([-2, -3, -4]), -3);
});

test('Positive: mathUtils.average([-2, -3, -4])', function() {
    assert.almostEqual( mathUtils.average([-1.5, -2.5, -3.5]), -2.5);
});

test('Negative: mathUtils.average(3,4,5)', function() {
    assert.throw(function() {
        mathUtils.average(3,4,5);
    }, 'ARGUMENT_IS_NOT_ARRAY');
});


suite('mathUtils averageAsync');

test('Positive: mathUtils.averageAsync([3,4,5])', function(done) {
    mathUtils.averageAsync([3,4,5]).then(function(avgValue) {
        assert.almostEqual(avgValue, 4);
        done();
    });
});


// Positive (DONE)
// [1,10,33, 44444, 10000000000]
// [1.5, 2.5, 3.5]
// [-2, -3, -4]
// [-1.5, -2.5, -3.5]

// Negative (Done)
// mathUtils.average(3,4,5)

// Negative (TODO)
// mathUtils.average([])
// mathUtils.average(['23', 'dsd'])
// mathUtils.average()
// mathUtils.average("somestring")

