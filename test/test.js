//requires mocha test framework
var mocha = require('mocha');
var assert = require('assert');
var hashit = require('../index');

describe('hashit', function() {
    it('should return a string', function() {
        assert.ok(hashit('sometext', 'secretcode'));
    });
});
