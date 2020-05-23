'use strict';

const database = require('../other/database/database');
const alphabetic_order = require('../utils/utils');
const utilities = require('../utils/utils');
/**
 * reservation
 * reserve/b
 *
 * bookId Integer ID of book to add to the cart
 * no response value expected for this operation
 **/
exports.addToCartPOST = function(bookId, cookies) {
    return new Promise(function(resolve, reject) {
        var user;
        var cart;
        if(cookies === undefined){
            // cookies empty, session_id is not provided for sure
            reject({
                status: 401,
                message: 'Unauthenticated user, please login first.'
            })
        }else {
            // A cookie string is provided, check if it contains the session-id
            var cookies_list = utilities.getCookies(cookies);
            var sessionId = cookies_list.JSESSIONID;
            if (sessionId !== undefined) {
                database.knex('sessionIds')
                    .select('user')
                    .where({session: sessionId})
                    .then(rows => {
                        if (rows.length > 0) {
                            user = rows[0].user;
                            return database.knex('users')
                                .select('cart_id')
                                .where({id: user})
                                .then(rows => {
                                    if (rows.length > 0) {
                                        cart = rows[0].cart_id;
                                        return database.knex('inCart')
                                            .select('cart_id', 'isbn', 'quantity')
                                            .where({
                                                cart_id: cart,
                                                isbn: bookId
                                            })
                                            .then(rows => {
                                                if (rows.length === 0) {
                                                    //not exists, insert
                                                    database.knex('inCart')
                                                        .insert({
                                                            cart_id: cart,
                                                            isbn: bookId
                                                        })
                                                        .returning(['cart_id', 'isbn'])
                                                        .then(output => {
                                                            if (output.length > 0) {
                                                                resolve({
                                                                    status: 200,
                                                                    message: 'Book added to your cart'
                                                                });
                                                            } else {
                                                                reject({
                                                                    status: 500,
                                                                    message: 'Internal server error'
                                                                });
                                                            }
                                                        })
                                                } else {
                                                    //exists, update
                                                    database.knex('inCart')
                                                        .update({quantity: rows[0].quantity + 1}, ['cart_id', 'isbn'])
                                                        .where({
                                                            cart_id: cart,
                                                            isbn: bookId
                                                        })
                                                        .then(updatedRows => {
                                                            if (updatedRows.length > 0) {
                                                                resolve({
                                                                    status: 200,
                                                                    message: 'Book added to your cart'
                                                                });
                                                            } else {
                                                                reject({
                                                                    status: 500,
                                                                    message: 'Internal server error'
                                                                });
                                                            }
                                                        })
                                                }
                                            })
                                    } else {
                                        reject({
                                            status: 500,
                                            message: 'Internal server error'
                                        });
                                    }
                                })
                        } else {
                            reject({
                                status: 401,
                                message: 'Unauthenticated user, please login first.'
                            });
                        }
                    })
            } else {
                resolve({
                    status: 401,
                    message: 'Unauthenticated user, please login first.'
                });
            }
        }
    })
};


/**
 * Books belonging to the inventory
 * List of books belonging to the inventory
 *
 * isBestseller Boolean Specify if the book is a Bestseller (optional)
 * isFavourite Boolean Specify if the book is a favourite reading of the BookStore (optional)
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.booksGET = function(isBestseller,isFavourite,offset,limit) {
    return new Promise(function(resolve, reject) {
        var books_isbn = [];
        var books_title = [];
        var books_price = [];
        var books_format = [];
        var books_picture = [];
        var alphabetic_indexes = []
        var elem = {};
        var data = [];

        if(isBestseller === true && !isFavourite){
            database.knex.select('isbn', 'price', 'title', 'format', 'picture')
                .from('books')
                .where({isBestseller: true})
                .then(rows => {
                    for (let i = 0; i < rows.length; i++) {
                        books_isbn.push(rows[i].isbn);
                        books_price.push(rows[i].price);
                        books_title.push(rows[i].title);
                        books_format.push(rows[i].format);
                        books_picture.push(rows[i].picture);
                    }
                    alphabetic_indexes =alphabetic_order.getOrderedIndexes(books_title.slice(0));
                  for (let i = 0; i < alphabetic_indexes.length; i++){
                    elem = {
                      isbn : books_isbn[alphabetic_indexes[i]],
                      price: books_price[alphabetic_indexes[i]],
                      title: books_title[alphabetic_indexes[i]],
                      format: books_format[alphabetic_indexes[i]],
                      picture: books_picture[alphabetic_indexes[i]]
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
        }else if(isFavourite === true && !isBestseller){
            database.knex.select('isbn', 'price', 'title', 'format', 'picture')
                .from('books')
                .where({isFavorite: true})
                .then(rows => {
                    for (let i = 0; i < rows.length; i++) {
                        books_isbn.push(rows[i].isbn);
                        books_price.push(rows[i].price);
                        books_title.push(rows[i].title);
                        books_format.push(rows[i].format);
                        books_picture.push(rows[i].picture);
                    }
                    alphabetic_indexes =alphabetic_order.getOrderedIndexes(books_title.slice(0));
                    for (let i = 0; i < alphabetic_indexes.length; i++){
                      elem = {
                        isbn : books_isbn[alphabetic_indexes[i]],
                        price: books_price[alphabetic_indexes[i]],
                        title: books_title[alphabetic_indexes[i]],
                        format: books_format[alphabetic_indexes[i]],
                        picture: books_picture[alphabetic_indexes[i]]
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
        }else if(!isBestseller && !isFavourite){
            database.knex.select('isbn', 'price', 'title', 'format', 'picture')
                .from('books')
                .then(rows => {
                    for (let i = 0; i < rows.length; i++) {
                        books_isbn.push(rows[i].isbn);
                        books_price.push(rows[i].price);
                        books_title.push(rows[i].title);
                        books_format.push(rows[i].format);
                        books_picture.push(rows[i].picture);
                    }
                    alphabetic_indexes =alphabetic_order.getOrderedIndexes(books_title.slice(0));
                  for (let i = 0; i < alphabetic_indexes.length; i++){
                    elem = {
                      isbn : books_isbn[alphabetic_indexes[i]],
                      price: books_price[alphabetic_indexes[i]],
                      title: books_title[alphabetic_indexes[i]],
                      format: books_format[alphabetic_indexes[i]],
                      picture: books_picture[alphabetic_indexes[i]]
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
        }else{
            reject({
                status: 400,
                message: 'Bad Request'
            })
        }

    });
};


/**
 * Find book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
    return new Promise(function(resolve, reject) {
        var results = {};
        var authors = [];
        var genres = [];
        var themes = [];
        var events_id = [];
        var similars_id = [];
        var similar_books = [];
        var book_events = [];
        var reviews = false;

        return database.knex('reviews')
            .count('*')
            .where({book: bookId})
            .then(rows => {
                console.log(rows);
                if (rows[0].count > 0) {
                    reviews = true;
                }
                // retrieve authors' ids from writtenBy
                return database.knex('writtenBy').select('author')
                    .where({isbn1: bookId})
                    .then((rows) => {
                        if (rows.length > 0) {
                            for (let i = 0; i < rows.length; i++) {
                                authors.push(rows[i].author);
                            }
                            // retrieve authors' first name, last name and pictures
                            return database.knex('authors').select('firstname', 'lastname', 'id', 'picture')
                                .whereIn('id', authors)
                                .then((rows) => {
                                    authors = [];
                                    for (let i = 0; i < rows.length; i++) {
                                        authors.push({
                                            name: rows[i].firstname + ' ' + rows[i].lastname,
                                            id: rows[i].id,
                                            picture: rows[i].picture
                                        });
                                    }
                                    // retrieve book's genres
                                    return database.knex('ofGenre').select('genre')
                                        .where({isbn: bookId})
                                        .then(rows => {
                                            for (let i = 0; i < rows.length; i++) {
                                                genres.push(rows[i].genre);
                                            }
                                            // retrieve book's themes
                                            return database.knex('aboutTheme').select('theme')
                                                .where({isbn: bookId})
                                                .then(rows => {
                                                    for (let i = 0; i < rows.length; i++) {
                                                        themes.push(rows[i].theme);
                                                    }
                                                    // retrieve book's events
                                                    return database.knex('events').select('id')
                                                        .where({isbn: bookId})
                                                        .then(rows => {
                                                            for (let i = 0; i < rows.length; i++) {
                                                                events_id.push(rows[i].id);
                                                            }
                                                            // retrieve events info
                                                            return database.knex('events').select('id', 'title', 'date', 'picture')
                                                                .whereIn('id', events_id)
                                                                .then(rows => {
                                                                    book_events = [];
                                                                    for (let i = 0; i < rows.length; i++) {
                                                                        book_events.push({
                                                                            id: rows[i].id,
                                                                            title: rows[i].title,
                                                                            date: rows[i].date,
                                                                            picture: rows[i].picture
                                                                        });
                                                                    }
                                                                    // retrieve similars_id
                                                                    return database.knex('similarTo').select('isbn1', 'isbn2')
                                                                        .where({isbn1: bookId})
                                                                        .orWhere({isbn2: bookId})
                                                                        .then(rows => {
                                                                            for (let i = 0; i < rows.length; i++) {
                                                                                if (rows[i].isbn1 != bookId) {
                                                                                    similars_id.push(rows[i].isbn1)
                                                                                }
                                                                                if (rows[i].isbn2 != bookId) {
                                                                                    similars_id.push(rows[i].isbn2)
                                                                                }
                                                                            }
                                                                            // retrieve similars info
                                                                            return database.knex('books').select('isbn', 'title', 'price', 'format', 'picture')
                                                                                .whereIn('isbn', similars_id)
                                                                                .then(rows => {
                                                                                    similar_books = [];
                                                                                    for (let i = 0; i < rows.length; i++) {
                                                                                        similar_books.push({
                                                                                            isbn: rows[i].isbn,
                                                                                            title: rows[i].title,
                                                                                            price: rows[i].price,
                                                                                            format: rows[i].format,
                                                                                            picture: rows[i].picture
                                                                                        });
                                                                                    }
                                                                                    // retrieve book's info from books and append previous retrieved info
                                                                                    return database.knex('books').select('*')
                                                                                        .where({isbn: bookId})
                                                                                        .then(rows => {
                                                                                            results["application/json"] = {

                                                                                                isbn: bookId,
                                                                                                title: rows[0].title,
                                                                                                abstract: rows[0].abstract,
                                                                                                fact_sheet: rows[0].fact_sheet,
                                                                                                interview: rows[0].interview,
                                                                                                picture: rows[0].picture,
                                                                                                price: rows[0].price,
                                                                                                format: rows[0].format,
                                                                                                authors: authors,
                                                                                                genres: genres,
                                                                                                themes: themes,
                                                                                                events: book_events,
                                                                                                similar_books: similar_books,
                                                                                                reviews: reviews

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
                                                                                                resolve({
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
                                                        })
                                                })
                                        })
                                })
                        }else{
                            reject({
                                status: 404,
                                message: 'Resource not found'
                            })
                        }
                    });

            });
    });
};


/**
 * retrieve the Reviews of the book
 * returns a list of Reviews
 *
 * bookId Long ID of book
 * returns List
 **/
exports.getReviews = function(bookId) {
    return new Promise(function(resolve, reject) {
        var results = {};

        return database.knex('books')
            .select('title')
            .where({isbn: bookId})
            .then(rows => {
                results['title'] = rows[0].title;

                return database.knex('reviews')
                    .join('users', 'reviews.user', '=', 'users.id')
                    .select('text', 'stars', 'firstname', 'lastname')
                    .where({'reviews.book': bookId})
                    .then(rows => {
                        results['data'] = rows;
                    })
                    .then(() => {
                        console.log(results);
                        if (results.data.length > 0) {
                            resolve({
                                status: 200,
                                message: results
                            });
                        } else {
                            resolve({
                                status: 204
                            });
                        }
                    })
            });
    });
};


/**
 * reservation
 * remove/b
 *
 * bookId Integer ID of book to remove from the cart
 * no response value expected for this operation
 **/
exports.removeFromCartPOST = function(bookId, cookies) {
    return new Promise(function(resolve, reject) {
        var user;
        var cart;
        if(cookies === undefined){
            // cookies empty, session_id is not provided for sure
            reject({
                status: 401,
                message: 'Unauthenticated user, please login first.'
            })
        }else {
            // A cookie string is provided, check if it contains the session-id
            var cookies_list = utilities.getCookies(cookies);
            var sessionId = cookies_list.JSESSIONID;
            if (sessionId !== undefined) {
                database.knex('sessionIds')
                    .select('user')
                    .where({session: sessionId})
                    .then(rows => {
                        if (rows.length > 0) {
                            user = rows[0].user;
                            return database.knex('users')
                                .select('cart_id')
                                .where({id: user})
                                .then(rows => {
                                    if (rows.length > 0) {
                                        cart = rows[0].cart_id;
                                        return database.knex('inCart')
                                            .del()
                                            .where({
                                                cart_id: cart,
                                                isbn: bookId
                                            })
                                            .then(deletedRows => {
                                                if (deletedRows === 1) {
                                                    resolve({
                                                        status: 200,
                                                        message: 'Book removed from your cart'
                                                    });
                                                } else {
                                                    reject({
                                                        status: 500,
                                                        message: 'Internal server error'
                                                    });
                                                }
                                            })
                                    } else {
                                        reject({
                                            status: 500,
                                            message: 'Internal server error'
                                        });
                                    }
                                })
                        } else {
                            reject({
                                status: 401,
                                message: 'Unauthenticated user, please login first.'
                            });
                        }
                    })
            } else {
                reject({
                    status: 401,
                    message: 'Unauthenticated user, please login first.'
                });
            }
        }
    });
};

