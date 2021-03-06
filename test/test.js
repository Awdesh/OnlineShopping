var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var wagner = require('wagner-core');

var URL = 'http://localhost:3000';

describe('Category API', function() {
    var server;

    before(function() {
        var app = express();

        models = require('../models')(wagner);
        app.use(require('../api')(wagner));

        server = app.listen(3000);

        Category = models.Category;
    });

    after(function() {
        server.close();
    });

    beforeEach(function(done) {
        // Make sure categories are empty before each test
        Category.remove({}, function(error) {
            assert.ifError(error);
            done();
        });
    });

    it('can load category by id', function(done) {
        Category.create({
            _id: 'Electronics'
        }, function(error, doc) {
            assert.ifError(error);
            var url = URL + '/category/id/Electronics';
            superagent.get(url, function(error, res) {
                assert.ifError(error);
                var result;
                // And make sure we got { _id: 'Electronics' } back
                assert.doesNotThrow(function() {
                    result = JSON.parse(res.text);
                });
                assert.ok(result.category);
                assert.equal(result.category._id, 'Electronics');
                done();
            });
        });
    });
});