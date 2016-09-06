var mongoose = require("mongoose");

// The ref option is what tells Mongoose which model to use during population.
var categorySchema = {
    _id: {
        type: String
    },
    parent: {
        type: String,
        ref: 'Category'
    },
    ancestors: [{
        type: String,
        ref: 'Category'
    }]
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;