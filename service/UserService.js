'use strict';

const database = require('../other/database/database');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
const utilities = require('../utils/utils');

/**
 * retrieve the books contained in the given Cart
 * returns a list of Cart Items
 *
 * userId Long ID of user owning the cart
 * returns List
 **/
exports.getCart = function(cookies) {
    return new Promise(function(resolve, reject) {
        var results = {};
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
                    .join('users', 'users.id', '=', 'sessionIds.user')
                    .select('cart_id')
                    .where({session: sessionId})
                    .then(rows => {
                        if (rows.length > 0) {
                            cart = rows[0].cart_id;
                            return database.knex('inCart')
                                .join('books', 'books.isbn', '=', 'inCart.isbn')
                                .select('inCart.isbn', 'title', 'quantity', 'price', 'format', 'picture')
                                .where({cart_id: cart})
                                .then(rows => {
                                    results = rows;
                                    if (Object.keys(results).length > 0) {
                                        resolve({
                                            status: 200,
                                            message: results
                                        });
                                    } else {
                                        resolve({
                                            status: 200,
                                            message: results
                                        });
                                    }
                                })
                        } else {
                            reject({
                                status: 401,
                                message: 'Unauthenticated user, please login first.'
                            })
                        }
                    });
            } else {
                reject({
                    status: 401,
                    message: 'Unauthenticated user, please login first.'
                });
            }
        }
    });
}


/**
 * retrieve all the purchases of the given user
 * returns a list of Purchases
 *
 * userId String Id of the User
 * returns List
 **/
exports.getUserPurchases = function(userId) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve({
                status: '500',
                message: '501 Not Implemented'
            });
        }
    });
}


/**
 * Login
 * Login with a form
 *
 * username String
 * password String
 * no response value expected for this operation
 **/
exports.userLoginPOST = function(body) {
    return new Promise(function(resolve, reject) {
        database.knex('users')
            .select('email', 'password', 'id')
            .where({email: body.email})
            .then(rows => {
                if(rows.length > 0){
                    bcrypt.compare(body.password, rows[0].password, function(err, res) {
                        if(res) {
                            console.log('DATABASE: Authentication successful');
                            let session_id = uuidv4();
                            return database.knex('sessionIds')
                                .insert({
                                    user: rows[0].id,
                                    session: session_id
                                })
                                .returning('session')
                                .then((output) => {
                                    if(output){
                                        resolve({
                                            status: 200,
                                            message: 'Authentication successful',
                                            session_id: output[0]
                                        })
                                    }else{
                                        console.log('DATABASE: something went wrong, no session id.');
                                        reject({
                                            status: 500,
                                            message: 'Something went wrong, no session id created.'
                                        });
                                    }
                                })
                                .catch((e) => {
                                    console.log(e.message);
                                    reject({
                                        status: 400,
                                        message: 'Account already logged in.'
                                    })
                                })
                        } else {
                            console.log('DATABASE: Error, wrong password.');
                            reject({
                                status: 400,
                                message: 'Wrong email or password.'
                            });
                        }
                    });
                }else{
                    console.log('DATABASE: Error, wrong email.');
                    reject({
                        status: 400,
                        message: 'Wrong email or password.'
                    });
                }
            })
    });
};


/**
 * Logout
 * Logout request
 *
 * no response value expected for this operation
 **/
exports.userLogoutPOST = function(sessionId) {
    return new Promise(function(resolve, reject) {
        if(sessionId !== undefined){
            database.knex('sessionIds')
                .select('*')
                .where({
                    session: sessionId
                })
                .then(rows => {
                    if(rows.length > 0){
                        return database.knex('sessionIds')
                            .where({
                                session: sessionId
                            })
                            .del()
                            .then(deletedRows => {
                                if(deletedRows > 0){
                                    resolve({
                                        status: 200,
                                        message: 'Logged out successfully.'
                                    });
                                }else{
                                    reject({
                                        status: 500,
                                        message: 'Internal server error.'
                                    });
                                }
                            })
                    }else{
                        reject({
                            status: 401,
                            message: 'Unauthenticated user.'
                        });
                    }
                })
        }else{
            reject({
                status: 401,
                message: 'Unauthenticated user.'
            })
        }
    });
}


/**
 * Register
 * Register into the store
 *
 * id Integer
 * email String
 * firstname String
 * lastname String
 * password String
 * cart Integer
 * no response value expected for this operation
 **/
exports.userRegisterPOST = function(body) {
    return new Promise(function(resolve, reject) {
        if ((body.firstname !== '') && (body.lastname !== '') && (body.email !== '') && (body.password !== '')) {
            //create a new cart
            database.knex('carts')
                .insert({})
                .returning('id')
                .then((id) => {
                    if (id) {
                        console.log('DATABASE: New cart successfully created!');
                        bcrypt.hash(body.password, 5, function (err, hash) {
                            // Store hash and all other info in the database
                            database.knex('users')
                                .insert({
                                    firstname: body.firstname,
                                    lastname: body.lastname,
                                    email: body.email,
                                    password: hash,
                                    cart_id: id[0]
                                })
                                .returning('id')
                                .then((id) => {
                                    if (id) {
                                        console.log('DATABASE: New user successfully created!');
                                        resolve({
                                            status: 200,
                                            message: 'Registered successfully.'
                                        });
                                    } else {
                                        console.log('DATABASE: Something went wrong, new user NOT created.');
                                        reject({
                                            status: 500,
                                            message: 'Internal server error.'
                                        });
                                    }
                                })
                                .catch((e) => {
                                    console.log(e.message);
                                    reject({
                                        status: 400,
                                        message: 'Email already in use, choose another one.'
                                    })
                                });
                        });
                    } else {
                        console.log('DATABASE: something went wrong, new cart NOT created.');
                        reject({
                            status: 500,
                            message: 'Internal server error.'
                        });
                    }
                });
        }else{
            reject({
                status: 400,
                message: 'Empty field(s).'
            })
        }
    });
};

