var mathUtils = require('../src/mathUtils');
var chai = require('chai');
var chaiStats = require('chai-stats');

chai.use(chaiStats);
var assert = chai.assert;

suite('mathUtils');

test('POSITIVE average', function () {
    assert.equal( mathUtils.average([3,4,5]), 4);
    });

test('POSITIVE average', function () {
    assert.equal( mathUtils.average([-2,-3,-4]), -3);
});

test("POSITIVE: mathUtils.average([1, 10, 33, 44444, 10000000000)", function () {
    assert.almostEqual( mathUtils.average([1, 10, 33, 44444, 10000000000]), 2000008897.6)
});

test("POSITIVE: mathUtils.average([1.5, 2.5, 3.5])", function () {
    assert.almostEqual( mathUtils.average([1.5, 2.5, 3.5]), 2.5)
});

test("POSITIVE: mathUtils.average([-1.5, -2.5, -3.5])", function () {
    assert.almostEqual( mathUtils.average([-1.5, -2.5, -3.5]), -2.5)
});

test("NEGATIVE: mathUtils.average(3,4,5)", function () {

    assert.throw(function() {
        mathUtils.average(3,4,5);
    }, 'ARGUMENT_IS_NOT_ARRAY');
});

suite('mathUtils averageAsync');

test("Positive: mathUtils.averagrAsync([3,4,5])", function (done) {
    mathUtils.averageAsync([3,4,5]).then(function (avgValue) {
        assert.almostEqual(avgValue, 4);
        done();
    });

});
