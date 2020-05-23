const knex_db = require('knex');
const db_data = require('./db_data');

const db_config = {
    client: 'pg',
    connection: {
        host: 'ec2-79-125-4-72.eu-west-1.compute.amazonaws.com',
        port: 5432,
        database: 'db0e4mndv8g6sl',
        user: 'zdtnuytuubnpaj',
        password: 'b111646e7384a098dc4819624c36e4415817b4647ac206c6ca6824d38c2dd413',
        ssl: true
    },
    pool: {min: 0, max: 50}
};

const knex = knex_db(db_config);

const build_db = function (){
    return knex.schema.hasTable('authors').then(function (exists) {
        if (!exists) {
            console.log('DATABASE: Creating table authors...');
            return knex.schema.createTable('authors', (table) => {
                table.integer('id').primary();
                table.string('firstname').notNullable();
                table.string('lastname').notNullable();
                table.string('picture');
                table.string('bio', 2500).notNullable();
            });
        }
        else{
            console.log('DATABASE: Table Authors already exists.')
        }
    })
        .then(function (){
            return knex.schema.hasTable('books').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table books...');
                    return knex.schema.createTable('books', (table) => {
                        table.string('isbn').primary();
                        table.string('title').notNullable();
                        table.string('abstract',1600).notNullable();
                        table.string('fact_sheet', 1200);
                        table.string('interview');
                        table.string('picture').notNullable();
                        table.string('price').notNullable();
                        table.string('format').notNullable();
                        table.integer('copies_available').notNullable();
                        table.boolean('isBestseller').notNullable();
                        table.boolean('isFavorite').notNullable();
                    });
                }else{
                    console.log('DATABASE: Table Books already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('events').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table events...');
                    return knex.schema.createTable('events', (table) => {
                        table.increments('id').primary();
                        table.string('title').notNullable();
                        table.string('description');
                        table.string('location').notNullable();
                        table.string('date').notNullable();
                        table.string('time').notNullable();
                        table.string('isbn').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('picture').notNullable();
                    });
                }else{
                    console.log('DATABASE: Table Events already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('carts').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table carts...');
                    return knex.schema.createTable('carts', (table) => {
                        table.increments('id').primary();
                    });
                }else{
                    console.log('DATABASE: Table Carts already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('genres').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table genres...');
                    return knex.schema.createTable('genres', (table) => {
                        table.string('name').primary();
                        table.string('description', 1200).notNullable();
                    });
                }else{
                    console.log('DATABASE: Table Genres already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('themes').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table themes...');
                    return knex.schema.createTable('themes', (table) => {
                        table.string('name').primary();
                        table.string('description',1200).notNullable();
                    });
                }else{
                    console.log('DATABASE: Table Themes already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('users').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table users...');
                    return knex.schema.createTable('users', (table) => {
                        table.increments('id').primary();
                        table.string('email').unique().notNullable();
                        table.string('firstname').notNullable();
                        table.string('lastname').notNullable();
                        table.string('password').notNullable();
                        table.integer('cart_id').references('carts.id')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                    });
                }else{
                    console.log('DATABASE: Table Users already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('aboutTheme').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table aboutTheme...');
                    return knex.schema.createTable('aboutTheme', (table) => {
                        table.string('isbn').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('theme').references('themes.name')
                            .onUpdate('CASCADE');
                        table.unique(['isbn', 'theme']);
                    });
                }else{
                    console.log('DATABASE: Table aboutTheme already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('inCart').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table inCart...');
                    return knex.schema.createTable('inCart', (table) => {
                        table.integer('cart_id').references('carts.id')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('isbn').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.integer('quantity').notNullable().defaultTo(1);
                        table.unique(['cart_id', 'isbn']);
                    });
                }else{
                    console.log('DATABASE: Table inCart already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('ofGenre').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table ofGenre...');
                    return knex.schema.createTable('ofGenre', (table) => {
                        table.string('isbn').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('genre').references('genres.name')
                            .onUpdate('CASCADE');
                        table.unique(['isbn', 'genre']);
                    });
                }else{
                    console.log('DATABASE: Table ofGenre already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('promotesBook').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table promotesBook...');
                    return knex.schema.createTable('promotesBook', (table) => {
                        table.integer('author').references('authors.id')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.integer('event').references('events.id')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.unique(['author', 'event']);
                    });
                }else{
                    console.log('DATABASE: Table promotesBook already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('purchases').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table purchases...');
                    return knex.schema.createTable('purchases', (table) => {
                        table.increments('id').primary();
                        table.integer('user_id').references('users.id')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('date_time').notNullable();
                        table.string('book').notNullable();
                        table.float('total_amount').notNullable();
                    });
                }else{
                    console.log('DATABASE: Table Purchases already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('reviews').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table reviews...');
                    return knex.schema.createTable('reviews', (table) => {
                        table.increments('id').primary();
                        table.string('text',2000).notNullable();
                        table.integer('user').references('users.id')
                            .onDelete('SET NULL')
                            .onUpdate('CASCADE');
                        table.string('book').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.integer('stars').notNullable().defaultTo(1);
                    });
                }else{
                    console.log('DATABASE: Table Reviews already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('similarTo').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table similarTo...');
                    return knex.schema.createTable('similarTo', (table) => {
                        table.string('isbn1').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.string('isbn2').references('books.isbn')
                            .onDelete('CASCADE')
                            .onUpdate('CASCADE');
                        table.unique(['isbn1', 'isbn2']);
                    });
                }else{
                    console.log('DATABASE: Table similarTo already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('writtenBy').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table writtenBy...');
                    return knex.schema.createTable('writtenBy', (table) => {
                        table.string('isbn1').references('books.isbn')
                            .onDelete('NO ACTION')
                            .onUpdate('CASCADE');
                        table.integer('author').references('authors.id')
                            .onDelete('NO ACTION')
                            .onUpdate('CASCADE');
                        table.unique(['isbn1', 'author']);
                    });
                }else{
                    console.log('DATABASE: Table writtenBy already exists.')
                }
            });
        })
        .then(function () {
            return knex.schema.hasTable('sessionIds').then(function (exists) {
                if (!exists) {
                    console.log('DATABASE: Creating table sessionIds...');
                    return knex.schema.createTable('sessionIds', (table) => {
                        table.integer('user').references('users.id')
                            .onDelete('NO ACTION')
                            .onUpdate('CASCADE')
                            .unique();
                        table.string('session');
                        table.timestamp('timestamp').defaultTo(knex.fn.now());
                        table.unique(['user', 'session']);
                    });
                }else{
                    console.log('DATABASE: Table sessionIds already exists.')
                }
            });
        })
        .then(function () {
            console.log('DATABASE: Inserting books...');
            return knex('books').insert(db_data.books)
                .then(()=>{console.log('DATABASE: Books inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting authors...');
            return knex('authors').insert(db_data.authors)
                .then(()=>{console.log('DATABASE: Authors inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting genres...');
            return knex('genres').insert(db_data.genres)
                .then(()=>{console.log('DATABASE: Genres inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting themes...');
            return knex('themes').insert(db_data.themes)
                .then(()=>{console.log('DATABASE: themes inserted.')})
                .catch((e)=>{console.log(e.message)});        })
        .then(function () {
            console.log('DATABASE: Inserting aboutTheme...');
            return knex('aboutTheme').insert(db_data.aboutTheme)
                .then(()=>{console.log('DATABASE: aboutTheme inserted.')})
                .catch((e)=>{console.log(e.message)});        })
        .then(function () {
            console.log('DATABASE: Inserting ofGenre...');
            return knex('ofGenre').insert(db_data.ofGenre)
                .then(()=>{console.log('DATABASE: ofGenre inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting writtenBy...');
            return knex('writtenBy').insert(db_data.writtenBy)
                .then(()=>{console.log('DATABASE: writtenBy inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting events...');
            return knex('events').insert(db_data.events)
                .then(()=>{console.log('DATABASE: events inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting promotesBook...');
            return knex('promotesBook').insert(db_data.promotesBook)
                .then(()=>{console.log('DATABASE: promotesBook inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting similarTo...');
            return knex('similarTo').insert(db_data.similarTo)
                .then(()=>{console.log('DATABASE: similarTo inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting users...');
            return knex('users').insert(db_data.users)
                .then(()=>{console.log('DATABASE: users inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
        .then(function () {
            console.log('DATABASE: Inserting reviews...');
            return knex('reviews').insert(db_data.reviews)
                .then(()=>{console.log('DATABASE: reviews inserted.')})
                .catch((e)=>{console.log(e.message)});
        })
};

module.exports = {
    knex: knex,
    db_builder: build_db
};