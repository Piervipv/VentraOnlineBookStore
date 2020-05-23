'use strict';

const database = require('../other/database/database');
const utilities = require('../utils/utils');

/**
 * all group of genres
 * List of genres
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.genreGET = function(offset,limit) {
    return new Promise(function(resolve, reject) {
        var genres = [];

        var alphabetic_indexes = [];
        var genres_name = [];
        var genres_description = [];

        database.knex('genres').select('name', 'description')
            .then(rows => {
                for (let i = 0; i < rows.length; i++) {
                    genres_name.push(rows[i].name);
                    genres_description.push(rows[i].description);
                }

                alphabetic_indexes = utilities.getOrderedIndexes(genres_name.slice(0));

                for(let i=0; i<alphabetic_indexes.length; i++){
                    genres.push({
                        name: genres_name[alphabetic_indexes[i]],
                        description: genres_description[alphabetic_indexes[i]]
                    })
                }
            })
            .then(() => {
                console.log(genres);
                if (genres.length > 0) {
                    resolve({
                        status: 200,
                        message: genres
                    });
                } else {
                    resolve({
                        status: 204
                    });
                }
            })
    });
}


/**
 * retrieve all books of the given genre
 * retrieve all books of the given genre
 *
 * genreTitle String title of the genre
 * returns List
 **/
exports.getBooksByGenre = function(genreTitle) {
    return new Promise(function(resolve, reject) {
        var results = {};
        var titles = [];

        var alphabetic_order = [];
        var books = [];

        database.knex('genres')
            .select('description')
            .where({name: genreTitle})
            .then(rows => {
                results['description'] = rows[0].description;
                results['genre'] = genreTitle;

                return database.knex('ofGenre')
                    .select('books.isbn', 'title', 'picture', 'price', 'format', 'genre')
                    .where({genre: genreTitle})
                    .join('books', 'books.isbn', '=', 'ofGenre.isbn')
                    .then(rows => {
                        for(let i = 0; i < rows.length;i++){
                            titles.push(rows[i].title);
                        }

                        alphabetic_order = utilities.getOrderedIndexes(titles.slice(0));

                        for(let i=0; i<alphabetic_order.length; i++){
                            books.push({
                                isbn: rows[alphabetic_order[i]].isbn,
                                title: rows[alphabetic_order[i]].title,
                                picture: rows[alphabetic_order[i]].picture,
                                price: rows[alphabetic_order[i]].price,
                                format: rows[alphabetic_order[i]].format
                            })
                        }
                        results['books'] = books;

                    })
                    .then(() => {
                        console.log(results);
                        if (Object.keys(results).length > 0) {
                            resolve({
                                status: 200,
                                message: results
                            });
                        } else {
                            resolve({
                                status: 204
                            });
                        }
                    });
            });
    });
}

