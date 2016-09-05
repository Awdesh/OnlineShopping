var _ = require("underscore");
var mongodb = require('mongodb');
var mongoose = require('mongoose');

var uri = 'mongodb://localhost:27017/movies';
mongoose.connect(uri);

mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }

    var movie = {
        'Name': 'Sholay',
        'Year': '1992',
        'Rating': 'PG',
        'ratings': {
            'critics': 70,
            'audience': 95
        },
        'screenplay': ['Ramesh Sippy', 'Rohan Sippy']
    };

    db.collection('movies').insert(movie, function(err, result) {
        if (err) {
            console.log('error inserting movie doc.');
            process.exit(1);
        }

        var query = {
            'screenplay': 'Ramesh Sippy'
        };
        db.collection('movies').find(query).toArray(function(error, movies) {
            if (error) {
                console.log(errror);
                process.exit(1);
            }

            console.log('Found movies-:');
            _.each(movies, function(movie) {
                console.log(JSON.stringify(movie));
            });

            query = {
                'ratings.audience': {
                    '$gte': 70
                }
            };

            db.collection('movies').find(query).toArray(function(error, movies) {
                if (error) {
                    console.log(errror);
                    process.exit(1);
                }

                console.log('Found movies by ratings-:');
                _.each(movies, function(movie) {
                    console.log(JSON.stringify(movie));
                });

                process.exit(0);
            });
        });
    });
});