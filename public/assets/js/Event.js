function updateEvent(id) {
    $.get(`/events/${id}`)
        .done(function(data, textStatus, jqXHR) {
            if(jqXHR.status === 200) {
                console.log(textStatus);
                return fillPage(data.message);
            }else{
                console.log(textStatus);
                $('#event-container').prepend(
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
            $('#event-container').prepend(
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
    updateOrientationInfo(doc.event_title);

    $("#tab-title").append(
        `
    ${doc.event_title}
    `
    );

    $("#event-info").append(
        `
    <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">${doc.event_title}</h4>
                        <hr>
                        <p class="card-text">${doc.event_description}</p>
                        
                        <p class="card-text">${'- ' + doc.event_location + ' -'}</p>
                        
                        <p class="card-text">${ '- ' + doc.event_date + ' -' }</p>
                        <p class="card-text">${ '- ' + doc.event_time + ' -' }</p>
                    </div>
                </div>
    `
    );


    let event_picture =  doc.event_picture + '.jpg';
    let alt_picture =  doc.event_title  + ' picture';
    $("#event-picture").append(
        `
    <img src="${event_picture}" alt="${alt_picture}" class="img-thumbnail">
    
    `
    );

    let book_picture = String(doc.book.picture)+'-mini.jpg';
    let alt_book_picture = String(doc.book.title) + ' thumbnail';
    $("#book").append(
        `   
        <div class="row m-1">
            <div class="card text-center">
                <a href="book.html?isbn=${doc.book.isbn}">
                    <img src='${book_picture}' alt='${alt_book_picture}' class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc.book.title}</p>
                    </div>
                </a>
                <p class="text-muted m-0">${doc.book.price}</p>
                <p class="text-muted m-0">${doc.book.format}</p>
            </div>
        </div>
    `
    );

    for (let i=0; i<doc.authors.length; i++){
        let picture = String(doc.authors[i].picture)+'-mini.jpg';
        let alt_picture = String(doc.authors[i].firstname)+ ' ' + String(doc.authors[i].lastname) + ' thumbnail';
        $("#authors").append(
            `
        <div class="row m-1">
            <div class="card text-center">
                <a href="author.html?id=${doc.authors[i].id}">
                    <img src='${picture}' alt='${alt_picture}' class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc.authors[i].firstname + ' ' + doc.authors[i].lastname}</p>
                    </div>
                </a>
            </div>
        </div>
        `
        );
    }

}
function updateOrientationInfo(event_title){
  let father = 'All events';
  let referrer = document.referrer;
  if (referrer.includes('events-this-month.html')){
    father = "Events this month"
  }
  $("#orientation-info").append(
      `
        <li class="breadcrumb-item" aria-current="page">${father}</li>
        <li class="breadcrumb-item active" aria-current="page">${event_title}</li>
        `
  );
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
let arguments = url.split('?')[1].split('=');
arguments.shift();

updateEvent(String(parseInt(arguments[0])));