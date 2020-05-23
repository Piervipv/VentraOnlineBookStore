function updateReviews(id) {
    $.get(`/books/${id}/reviews`)
        .done(function(data, textStatus, jqXHR) {
            if(jqXHR.status === 200) {
                console.log(textStatus);
                fillPage(data.message);
            }else if(jqXHR.status === 204){
                console.log(textStatus);
                $('#container').append(
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
            $('#container').append(
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

    $("#header").append(
        `
    ${doc.title}
    `
    );

    for (let i=0; i<doc.data.length; i++){
        let path = '/assets/img/'+ doc.data[i].stars +'_stars.png';

        $('#reviews-list').append(
            `    
                <div class="row m-3">
                    <div class="col-md-1"></div>
                    <div class="col-md-4 mt-2 mb-2">
                        <div class="row justify-content-center">
                            <img src='/assets/img/profile.png' alt="profile-icon">
                            <p class="text-muted ml-3">${doc.data[i].firstname} ${doc.data[i].lastname}</p>
                        </div>
                        <div class="row justify-content-center">
                            <img src=${path} alt="stars">
                        </div>
                    </div>
                    <div class="col-md-6 mt-2 mb-2">
                        <div class="card card-full-height">
                            <div class="card-body">
                                <p class="card-text">
                                    ${doc.data[i].text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            `
        )
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
    item2.appendChild(document.createTextNode('Books'));
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
let arguments = url.split('?')[1].split('=');
arguments.shift();

updateReviews(String(arguments));