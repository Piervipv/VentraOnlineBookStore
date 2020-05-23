'use strict';

const database = require('../other/database/database');
const utilities = require('../utils/utils');


/**
 * retrieve all books of the given theme
 * retrieve all books of the given theme
 *
 * themeTitle String title of the theme
 * returns List
 **/
exports.getBooksByTheme = function(themeTitle) {
    return new Promise(function(resolve, reject) {
        var results = {};
        var titles = [];
        var alphabetic_order = [];
        var books = [];

        return database.knex('themes')
            .select('description')
            .where({name: themeTitle})
            .then(rows => {
                results['description'] = rows[0].description;
                results['theme'] = themeTitle;

                return database.knex('aboutTheme')
                    .select('books.isbn', 'title', 'picture', 'price', 'format')
                    .where({theme: themeTitle})
                    .join('books', 'books.isbn', '=', 'aboutTheme.isbn')
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
                                message: results});
                        } else {
                            resolve({
                                status: 204
                            });
                        }
                    });
            });
    });
};


/**
 * all gropus of themes
 * List of themes
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.themeGET = function(offset,limit) {
    return new Promise(function(resolve, reject) {
        var themes = [];

        var alphabetic_indexes = [];
        var themes_name = [];
        var themes_description = [];

        database.knex('themes').select('name', 'description')
            .then(rows => {
                for (let i = 0; i < rows.length; i++) {
                    themes_description.push(rows[i].description);
                    themes_name.push(rows[i].name);
                }

                alphabetic_indexes = utilities.getOrderedIndexes(themes_name.slice(0));
                for(let i = 0; i < alphabetic_indexes.length; i++){
                    themes.push({
                        name: themes_name[alphabetic_indexes[i]],
                        description: themes_description[alphabetic_indexes[i]]
                    })
                }
            })
            .then(() => {
                console.log(themes);
                if (themes.length > 0) {
                    resolve({
                        status: 200,
                        message: themes
                    });
                } else {
                    resolve({
                        status: 204
                    });
                }
            });
    });
};


