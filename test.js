var assert = require('assert');

describe('my feature', function() {
    it('works', function() {
        assert.equal('A', 'A');
    });

    it('fails gracefully', function() {
        assert.throws(function() {
            throw 'Error!';
        });
    });
});