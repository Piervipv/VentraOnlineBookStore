'use strict';
const database = require('../other/database/database');
const alphabetic_order = require('../utils/utils');

/**
 * all authors in the store
 * List authors in the store
 *
 * book String Retrieve authors by book id (optional)
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.authorGET = function(offset,limit) {
    return new Promise(function(resolve, reject) {
        var authors_id = [];
        var authors_firstname = [];
        var authors_lastname = [];
        var authors_picture = [];
        var indexes = [];
        var data = [];
        var elem = {};
        return database.knex.select('id', 'firstname', 'lastname', 'picture')
            .from('authors')
            .then((rows) => {
                for (let i = 0; i < rows.length; i++) {
                    authors_id.push(rows[i].id);
                    authors_firstname.push(rows[i].firstname);
                    authors_lastname.push(rows[i].lastname);
                    authors_picture.push(rows[i].picture);
                }

                indexes = alphabetic_order.getOrderedIndexes(authors_firstname.slice(0));
              for (let i = 0; i < indexes.length; i++){
                elem = {
                  id : authors_id[indexes[i]],
                  firstname: authors_firstname[indexes[i]],
                  lastname: authors_lastname[indexes[i]],
                  picture: authors_picture[indexes[i]]
                }
                data.push(elem);
              }

            })
            .then(() => {
                console.log(data);
                if (data.length > 0) {
                    resolve({
                        status: 200,
                        message: data
                    });
                } else {
                    resolve({
                        status: 204
                    });
                }
            });
    });
};


/**
 * Find author by Id
 * Returns an Author
 *
 * authorId Long Id of the author to return
 * returns Author
 **/
exports.getAuthorById = function(authorId) {
    return new Promise(function(resolve, reject) {
        var results = {};
        var books = [];
        var events = [];
        var books_isbn = [];
        var books_title = [];
        var events_id = [];
        var events_date_time = [];
        var book_indices = [];
        var event_indeces = [];
        console.log("getAuthorbyID called with: " + authorId);

        // retrieve books' ids from writtenBy
        return database.knex('writtenBy').select('isbn1')
            .where({ author: authorId })
            .then((rows) => {
                if (rows.length > 0) {
                    for (let i = 0; i < rows.length; i++) {
                        books_isbn.push(rows[i].isbn1);
                        console.log(rows[i].isbn1)
                    }
                    // retrieve books' isbn, title, price, format and picture
                    return database.knex('books').select('isbn', 'title', 'price', 'format', 'picture')
                        .whereIn('isbn', books_isbn)
                        .then((rows) => {
                            //books_isbn = [];
                            for (let i = 0; i < rows.length; i++) {
                                books_title.push(rows[i].title);
                            }
                            book_indices = alphabetic_order.getOrderedIndexes(books_title.slice(0));

                            for(let i=0; i<book_indices.length; i++){
                                books.push({
                                    isbn: rows[book_indices[i]].isbn,
                                    title: rows[book_indices[i]].title,
                                    price: rows[book_indices[i]].price,
                                    format: rows[book_indices[i]].format,
                                    picture: rows[book_indices[i]].picture
                                })
                            }
                            // retrieve events in which the author partecipate
                            return database.knex('promotesBook').select('event')
                                .where({author: authorId})
                                .then(rows => {
                                    for (let i = 0; i < rows.length; i++) {
                                        events_id.push(rows[i].event);
                                    }
                                    // retrieve events info
                                    return database.knex('events').select('id', 'date', 'title')
                                        .whereIn('id', events_id)
                                        .then(rows => {
                                            for (let i = 0; i < rows.length; i++) {
                                                events_date_time.push(rows[i].date);
                                            }
                                            event_indeces = alphabetic_order.getOrderedIndexes(events_date_time.slice(0));

                                            for(let i=0; i<event_indeces.length; i++){
                                                events.push({
                                                    id: rows[event_indeces[i]].id,
                                                    title: rows[event_indeces[i]].title,
                                                    date: rows[event_indeces[i]].date
                                                })
                                            }
                                            // retrieve authors's info from books and append previous retrieved info
                                            return database.knex('authors').select('*')
                                                .where({id: authorId})
                                                .then(rows => {
                                                    results["application/json"] = {

                                                        id: authorId,
                                                        firstname: rows[0].firstname,
                                                        lastname: rows[0].lastname,
                                                        bio: rows[0].bio,
                                                        picture: rows[0].picture,
                                                        books: books,
                                                        events: events

                                                    };
                                                    console.log(results);
                                                })
                                                .then(() => {
                                                    if (Object.keys(results).length > 0) {
                                                        resolve({
                                                            status: 200,
                                                            message: results[Object.keys(results)[0]]
                                                        });
                                                    } else {
                                                        reject({
                                                            status: 404,
                                                            message: 'Resource not found'
                                                        });
                                                    }
                                                })
                                                .catch((err) => {
                                                    console.log(err.message)
                                                });
                                        })
                                })
                        })
                }else{
                    reject({
                        status: 404,
                        message: 'Resource not found'
                    });
                }
            });
    });
};




