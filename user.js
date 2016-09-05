var mongoose = require('mongoose');
var _ = require('underscore');
var schema = require('./schema');

var uri = 'mongodb://localhost:27017/users';
mongoose.connect(uri);

var User = mongoose.model('User', schema, 'users');

var user = new User({
    name: 'John Smith',
    email: 'john.smith@gmail.com'
});

user.save(function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    User.find(function(err, users) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        // _.each(users, function(err, user) {
        console.log(user);
        // process.exit(0);
        // });
    });
});