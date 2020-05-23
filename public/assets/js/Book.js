function updateBook(id) {
    $.get(
        `/books/${id}`
    )
        .done(function(data, textStatus, jqXHR) {
            if(jqXHR.status === 200) {
                console.log(textStatus);
                return fillPage(data.message);
            }else{
                console.log(textStatus);
                $('#container').prepend(
                    `
                    <div class="alert alert-warning m-3" role="alert">
                        ${jqXHR.statusText}
                    </div>
                    `
                )
            }
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ':' + errorThrown);
            $('#container').prepend(
                `
                    <div class="alert alert-danger m-3" role="alert">
                        ${jqXHR.responseJSON.message}
                    </div>
                    `
            )
        })
        .always(() => {
            dynamicPrivateArea();
        });
}

function fillPage(doc) {
    updateOrientationInfo(doc);

    $("#tab-title").append(
        `
    ${doc.title}
    `
    );

    $("#book-title").append(
        `
    ${doc.title}
    `
    );

    for (let i=0; i<doc.authors.length; i++){
        if (i === (doc.authors.length - 1)){
            $("#author-name").append(
                doc.authors[i].name
            );
        }else{
            $("#author-name").append(
                doc.authors[i].name+', '
            );
        }
    }


    $("#format").append(
        `
    ${doc.format}
    `
    );

    $("#isbn").append(
        `
    ${doc.isbn}
    `
    );

    $("#price").append(
        `
   ${doc.price}
    `
    );
    let book_picture =String(doc.picture)+'.jpg';
    let alt_picture = String(doc.title)+' picture';
    $("#book-picture").append(
        `
        <img src="${book_picture}" alt="${alt_picture}" class="img-thumbnail"> 
    `
    );

    $("#abstract").append(
        `
    ${doc.abstract}
    `
    );

    $("#fact-sheet").append(
        `
    ${doc.fact_sheet}
    `
    );

    if (doc.genres.length > 0) {
        for (let i = 0; i < doc.genres.length; i++) {
            $("#genres").append(
                `
            <a class='m-1' href="booksByGenre.html?genre=${doc.genres[i]}">${doc.genres[i]}</a>
            `
            );
        }
    }else{
        $("#genres").append(
            `
            <a class="btn disabled" href="">-</a>
            `
        );
    }

    if (doc.themes.length > 0) {
        for (let i = 0; i < doc.themes.length; i++) {
            $("#themes").append(
                `
            <a class='m-1' href="booksByTheme.html?theme=${doc.themes[i]}">${doc.themes[i]}</a>
            `
            );
        }
    }else{
        $("#themes").append(
            `
            <a class="btn disabled" href="">-</a>
            `
        );
    }

    if (doc.interview){
        $("#interview").append(
            `
            <a href="${doc.interview}">See interview.</a>
        `
        );
    }else{
        $("#interview").append(
            `
            <a class="btn disabled" href="">See interview.</a>
        `
        );
    }

    if (doc.reviews === true){
        $("#reviews").append(
            `
            <a href="reviews.html?isbn=${doc.isbn}">See reviews.</a>
        `
        );
    }else{
        $("#reviews").append(
            `
            <a class="btn disabled" href="">See reviews.</a>
        `
        );
    }

    for (let i=0; i<doc.authors.length; i++){
        let picture =String(doc.authors[i].picture)+'-mini.jpg';
        let alt_image = String(doc.authors[i].name + ' thumbnail');
        $("#authors").append(
            `
        <div class="col-md-2 mb-2 mt-2">
            <div class="card text-center card-full-height">
                <a href="author.html?id=${doc.authors[i].id}">
                    <img src=${picture} alt="${alt_image}" class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc.authors[i].name}</p>
                    </div>
                </a>
            </div>
        </div>
        `
        );
    }
  if (doc.events.length === 0) {
    $("#events").append(
        `
            <a class="btn disabled" href="">No events for this book.</a>
        `
    );
  }
    for (let i=0; i<doc.events.length; i++){
        $("#events").append(
            `
        <div class="card m-2 card-fixed-width">
            <div class="card-body">
                <h5 class="card-title">${doc.events[i].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${doc.events[i].date}</h6>
                <a href="event.html?id=${doc.events[i].id}" class="card-link">See event</a>
            </div>
        </div>
        `
        );
    }
  if (doc.similar_books.length === 0) {
    $("#similar-books").append(
        `
            <a class="btn disabled" href="">None.</a>
        `
    );
  }
    for (let i=0; i<doc.similar_books.length; i++){
        let book_picture = String(doc.similar_books[i].picture)+'-mini.jpg';
        let alt_image = String(doc.similar_books[i].title + ' thumbnail');

        $("#similar-books").append(
            `
        <div class="col-md-2">
            <div class="card text-center card-full-height">
                <a href="book.html?isbn=${doc.similar_books[i].isbn}">
                    <img src="${book_picture}" alt="${alt_image}" class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc.similar_books[i].title}</p>
                    </div>
                </a>
                <p class="text-muted m-0">${doc.similar_books[i].price}</p>
                <p class="text-muted m-0">${doc.similar_books[i].format}</p>
            </div>
        </div>
        `
        );
    }

}

function updateOrientationInfo(doc){
    let father = 'All books';
    let referrer = document.referrer;
    if (referrer.includes('favorite.html')){
      father = 'Our favorite readings';
    }
    if (referrer.includes('bestsellers.html')){
    father = 'Bestsellers';
    }
    let elem = document.getElementById("orientation-info");
    let item = document.createElement('li');
    item.setAttribute('class', 'breadcrumb-item');
    item.setAttribute('aria-current', 'page');
    item.appendChild(document.createTextNode('Home'));
    let item2 = document.createElement('li');
    item2.setAttribute('class', 'breadcrumb-item');
    item2.setAttribute('aria-current', 'page');
    item2.appendChild(document.createTextNode(`${father}`));
    let last_item = document.createElement('li');
    last_item.setAttribute('class', 'breadcrumb-item active');
    last_item.setAttribute('aria-current', 'page');
    last_item.appendChild(document.createTextNode(`${doc.title}`));

    elem.appendChild(item);
    elem.appendChild(item2);
    elem.appendChild(last_item);

}

function dynamicPrivateArea() {
    if($.cookie('JSESSIONID') === undefined){
        //user not logged in
        $('#privateArea').html(`
            <a class="dropdown-item" href="register.html">Register</a>
            <a class="dropdown-item" href="login.html">Login</a>
        `);
    }else{
        //user logged in
        $('#privateArea').html(`
            <a class="dropdown-item" href="cart.html">My Cart</a>
            <a class="btn dropdown-item" id="logoutBtn">Logout</a>
            
        `);
    }
}

let url = window.location.href;
var params = url.split('?')[1].split('=');
params.shift();

$('#addBtn').on('click', function (event) {
    event.preventDefault();

    $.ajax({
        url: `/books/${params[0]}/addToCart`,
        type: "POST",
        dataType: "json"
    })
        .done((data, textStatus, jqXHR) => {
            if(jqXHR.status === 200){
                console.log(textStatus + ':' + data.message);
                $('#container').prepend(`
                    <div class="alert alert-success alert-dismissible fade show" role="alert"> ${data.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `)
            }else{
                console.log(textStatus + ':' + data.message);
                $('#container').prepend(`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert"> ${data.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `)
            }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.log(textStatus + ':' + errorThrown);
            $('#container').append(
                `
                    <div class="alert alert-danger m-3" role="alert">
                        ${jqXHR.responseJSON.message}
                    </div>
                    `
            )
        })

});

updateBook(params[0]);