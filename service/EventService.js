'use strict';
const database = require('../other/database/database');
const utilities = require('../utils/utils');


/**
 * All scheduled events
 * List of events scheduled 
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.eventGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var events_id = [];
    var events_title = [];
    var events_date = [];
    var events_picture = [];
    var chronological_indexes = [];
    var elem = {};
    var data = [];

    database.knex.select('id', 'title','date', 'picture')
        .from('events')
        .then(rows => {
            for (let i = 0; i < rows.length; i++) {
                events_id.push(rows[i].id);
                events_title.push(rows[i].title);
                events_picture.push(rows[i].picture);
                events_date.push(rows[i].date)
            }

            chronological_indexes = utilities.getOrderedIndexes(events_date.slice(0));
            for (let i = 0; i < chronological_indexes.length; i++){
                elem = {
                  id : events_id[chronological_indexes[i]],
                  title: events_title[chronological_indexes[i]],
                  date: events_date[chronological_indexes[i]]
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
}


/**
 * All events scheduled for the current month
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed  500. (optional)
 * returns List
 **/
exports.eventThisMonthGET = function(offset,limit) {
    return new Promise(function(resolve, reject) {
        var events_id = [];
        var events_title = [];
        var events_date = [];
        var chronological_indexes = [];
        var data = [];
        var current_date = new Date();

        database.knex.select('id', 'title','date')
            .from('events')
            .then(rows => {
                for (let i = 0; i < rows.length; i++) {
                    events_id.push(rows[i].id);
                    events_title.push(rows[i].title);
                    events_date.push(rows[i].date)
                }

                chronological_indexes = utilities.getOrderedIndexes(events_date.slice(0));
                for (let i = 0; i < chronological_indexes.length; i++){
                    let date_values = events_date[chronological_indexes[i]].split('/');
                    let event_date = new Date(
                        parseInt(date_values[2]),
                        parseInt(date_values[1]) - 1,
                        parseInt(date_values[0])
                    );
                    if (current_date.getMonth() === event_date.getMonth() && current_date.getDate() <= event_date.getDate()){
                        data.push({
                            id : events_id[chronological_indexes[i]],
                            title: events_title[chronological_indexes[i]],
                            date: events_date[chronological_indexes[i]]
                        });
                    }
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
}


/**
 * Find event by Id
 * Returns an Event
 *
 * eventId Long Id of the event to return
 * returns Event
 **/
exports.getEventById = function(eventId) {
    return new Promise(function(resolve, reject) {
        var results = {};
        var authors = [];

        var book_isbn;
        var authors_id = [];

        var event_title = [];
        var event_location;
        var event_date;
        var event_time;
        var event_picture;
        var event_description;

        console.log("getEventbyID called with: " + eventId);

        // retrieve authors ids from promotesBook
        return database.knex('promotesBook').select('author')
            .where({ event: eventId })
            .then((rows) => {
                if (rows.length > 0) {
                    console.log('author id ok');
                    for (let i = 0; i < rows.length; i++) {
                        authors_id.push(rows[i].author);
                    }
                    // retrieve authors info
                    return database.knex('authors').select('id', 'firstname', 'lastname', 'picture')
                        .whereIn('id', authors_id)
                        .then((rows) => {
                            console.log('author info ok')
                            for (let i = 0; i < rows.length; i++) {
                                authors.push({
                                    id: rows[i].id,
                                    firstname: rows[i].firstname,
                                    lastname: rows[i].lastname,
                                    picture: rows[i].picture
                                });
                            }
                            // retrieve event info
                            return database.knex('events').select('id', 'title', 'description', 'location', 'date', 'time', 'isbn', 'picture')
                                .where({id: eventId})
                                .then(rows => {
                                    if (rows.length > 0) {
                                        console.log('event info  ok')
                                        for (let i = 0; i < rows.length; i++) {
                                            event_title = rows[i].title;
                                            event_location = rows[i].location;
                                            event_date = rows[i].date;
                                            event_time = rows[i].time;
                                            event_picture = rows[i].picture;
                                            event_description = rows[i].description;
                                            book_isbn = rows[i].isbn;
                                        }
                                        // retrieve book info
                                        return database.knex('books').select('isbn', 'title', 'format', 'price', 'picture')
                                            .where({isbn: book_isbn})
                                            .then(rows => {
                                                console.log('book info ok');
                                                results["application/json"] = {

                                                    id: eventId,
                                                    event_title: event_title,
                                                    event_location: event_location,
                                                    event_date: event_date,
                                                    event_time: event_time,
                                                    event_picture: event_picture,
                                                    event_description: event_description,
                                                    authors: authors,
                                                    book: {
                                                        isbn: rows[0].isbn,
                                                        title: rows[0].title,
                                                        format: rows[0].format,
                                                        price: rows[0].price,
                                                        picture: rows[0].picture
                                                    }

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
                                                        status: 200,
                                                        message: 'No content'
                                                    });
                                                }
                                            })
                                            .catch(() => {
                                                reject({
                                                    status: 500,
                                                    message: 'Internal server error'
                                                })
                                            });
                                    } else {
                                        reject({
                                            status: 404,
                                            message: 'Resource not found'
                                        })
                                    }
                                })
                        })
                }else{
                    reject({
                        status: 404,
                        message: 'Resource not found'
                    })
                }
            })
    });
};

