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

test('Negative: mathUtils.average([])', function() {
    var result = mathUtils.average([]);
    assert.ok( isNaN(result) );
});

test('Negative: mathUtils.average(["23", "dsd"])', function() {
    assert.throw(function() {
        mathUtils.average(['23', 'dsd'])
    }, 'ONLY_NUMERIC_VALUES_ARE_SUPPORTED');
});

test('Negative: mathUtils.average()', function() {
    assert.throw(function() {
        mathUtils.average();
    }, 'ARGUMENT_IS_NOT_ARRAY');
});



suite('mathUtils averageAsync');

test('Positive: mathUtils.averageAsync([3,4,5])', function() {
    return mathUtils.averageAsync([3,4,5]).then(function(avgValue) {
        assert.almostEqual(avgValue, 4);
    });
});

test('Negative: mathUtils.averageAsync(3,4,5)', function() {
    return mathUtils.averageAsync(3,4,5).catch(function(error) {
        assert.ok(error);
        assert.equal(error.message, 'ARGUMENT_IS_NOT_ARRAY');
    });
});


// Positive (DONE)
// [1,10,33, 44444, 10000000000]
// [1.5, 2.5, 3.5]
// [-2, -3, -4]
// [-1.5, -2.5, -3.5]

// Negative (Done)
// mathUtils.average(3,4,5)
// mathUtils.average([])
// mathUtils.average(['23', 'dsd'])
// mathUtils.average()

// Negative (TODO)
// mathUtils.average("somestring")

