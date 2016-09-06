var mongoose = require('mongoose');
var categorySchema = require('./category');

module.exports = function(wagner) {
    var uri = "mongodb://localhost:27017/test";
    mongoose.connect(uri);

    var Category =
        mongoose.model('Category', categorySchema, 'categories');

    wagner.factory('Category', function() {
        return Category;
    });

    return {
        Category: Category
    };
};