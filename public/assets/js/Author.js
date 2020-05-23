function updateAuthor(id) {
    $.get(`/authors/${id}`)
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
    ${doc.firstname + " " + doc.lastname}
    `
    );

    $("#author-fullname").append(
        `
    ${doc.firstname + " " + doc.lastname}
    `
    );



    $("#author-bio").append(
        `
    ${doc.bio}
    `
    );

    let author_picture =  String(doc.picture) + '.jpg';
    let alt_picture =  String(doc.firstname) + String(doc.lastname) + ' picture';
    $("#author-picture").append(
        `
        <img src="${author_picture}" alt="${alt_picture}" class="img-thumbnail"> 
    `
    );


    for (let i=0; i<doc.books.length; i++){
        let picture = String(doc.books[i].picture)+'-mini.jpg';
        let alt_picture = String(doc.books[i].title)+' thumbnail';
        $("#authors-books").append(
            `
        <div class="col-md-2 mb-2 mt-2">
            <div class="card text-center card-full-height">
                <a href="book.html?isbn=${doc.books[i].isbn}">
                    <img src='${picture}' alt='${alt_picture}' class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc.books[i].title}</p>
                    </div>
                </a>
                <p class="text-muted m-0">${doc.books[i].price}</p>
                <p class="text-muted m-0">${doc.books[i].format}</p>
            </div>
        </div>
        `
        );
    }

    if(doc.events.length === 0){
        $("#authors-events").append(
            `
            <a class="btn disabled" href="">This author won't attend to any event for the moment.</a>
        `
        );
    }else{
        for (let i=0; i<doc.events.length; i++){
            $("#authors-events").append(
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
    }

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

function updateOrientationInfo(doc){
    let elem = document.getElementById("orientation-info");
    let item = document.createElement('li');
    item.setAttribute('class', 'breadcrumb-item');
    item.setAttribute('aria-current', 'page');
    item.appendChild(document.createTextNode('Home'));
    let item2 = document.createElement('li');
    item2.setAttribute('class', 'breadcrumb-item');
    item2.setAttribute('aria-current', 'page');
    item2.appendChild(document.createTextNode('Authors'));
    let last_item = document.createElement('li');
    last_item.setAttribute('class', 'breadcrumb-item active');
    last_item.setAttribute('aria-current', 'page');
    last_item.appendChild(document.createTextNode(`${doc.firstname + " " + doc.lastname}`));

    elem.appendChild(item);
    elem.appendChild(item2);
    elem.appendChild(last_item);

}

let url = window.location.href;
let arguments = url.split('?')[1].split('=');
arguments.shift();

updateAuthor(String(parseInt(arguments[0])));