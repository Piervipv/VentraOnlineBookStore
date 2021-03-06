function updateAuthors() {
    $.get(`/authors`)
        .done(function(data, textStatus, jqXHR) {
            if(jqXHR.status === 200) {
                console.log(textStatus);
                return fillPage(data.message);
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
    if (window.matchMedia("only screen " +
        "and (min-device-width: 768px) " +
        "and (max-device-width: 1024px) " +
        "and (orientation: portrait) " +
        "and (-webkit-min-device-pixel-ratio: 2)").matches) {
        // tablet portrait
        fillTablet(doc, false)
    } else if (window.matchMedia("only screen " +
        "and (min-device-width: 768px) " +
        "and (max-device-width: 1024px) " +
        "and (orientation: landscape) " +
        "and (-webkit-min-device-pixel-ratio: 2)").matches){
        // tablet landscape
        fillTablet(doc, true)
    } else if (window.matchMedia("only screen " +
        "and (min-device-width: 375px) " +
        "and (max-device-width: 667px) " +
        "and (-webkit-min-device-pixel-ratio: 2) " +
        "and (orientation: portrait)").matches){
        // phone portrait
        fillPhone(doc, false)
    } else if (window.matchMedia("only screen " +
        "and (min-device-width: 375px) " +
        "and (max-device-width: 667px) " +
        "and (-webkit-min-device-pixel-ratio: 2) " +
        "and (orientation: landscape)").matches){
        // phone landscape
        fillPhone(doc, true)
    } else{
        fillDefault(doc)
    }
}

function fillPhone(doc, landscape) {
    console.log("fillPhone called");
    if (landscape === true) {
    // you're in landscape mode
        for (let i = 0; i < doc.length; i++) {
            let path = doc[i].picture + '-mini.jpg';
            let alt = doc[i].firstname + ' ' + doc[i].lastname + ' picture';
            $("#authors-list").append(
                `
                <div class="col-6 mb-3">
                    <div class="card text-center card-full-height">
                        <a href='author.html?id=${doc[i].id}'>
                            <img src='${path}' alt="${alt}" class="img-thumbnail m-3">
                            <div class="caption">
                                <p class="h6">${doc[i].firstname}, ${doc[i].lastname}</p>
                            </div>
                        </a>
                    </div>
               </div>
               `
            );
        }
    }
    else{
        fillDefault(doc)
    }
}

function fillTablet(doc, landscape) {
    console.log("fillTablet called");
    if (landscape === true) {
        for (let i = 0; i < doc.length; i++) {
            let path = doc[i].picture + '-mini.jpg';
            let alt = doc[i].firstname + ' ' + doc[i].lastname + ' picture';
            $("#authors-list").append(
                `
            <div class="col-md-3 mb-3 mt-3">
            <div class="card text-center card-full-height">
                <a href='author.html?id=${doc[i].id}'>
                    <img src='${path}' alt="${alt}" class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${doc[i].firstname}, ${doc[i].lastname}</p>
                    </div>
                </a>
            </div>
        </div>
            `
            );
        }
    }
    else{
        for (let i = 0; i < doc.length; i++) {
            let path = doc[i].picture+'-mini.jpg';
            let alt = doc[i].firstname+' '+doc[i].lastname +' picture';
            $("#authors-list").append(
                `
            <div class="col-md-4 mb-4 mt-4">
            <div class="card text-center card-full-height">
                <a href='author.html?id=${doc[i].id}'>
                    <img src='${path}' alt="${alt}" class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${ doc[i].firstname}, ${doc[i].lastname}</p>
                    </div>
                </a>
            </div>
        </div>
            `
            );
        }
    }

}

function fillDefault(doc) {
  console.log("fillDefault called");
  for (let i = 0 ; i < doc.length ; i++){
    let path = doc[i].picture+'-mini.jpg';
    let alt = doc[i].firstname+' '+doc[i].lastname +' picture';
    $("#authors-list").append(
        `
            <div class="col-md-2 mb-2 mt-2">
            <div class="card text-center card-full-height">
                <a href='author.html?id=${doc[i].id}'>
                    <img src='${path}' alt="${alt}" class="img-thumbnail m-3">
                    <div class="caption">
                        <p class="h6">${ doc[i].firstname}, ${doc[i].lastname}</p>
                    </div>
                </a>
            </div>
        </div>
            `
    );
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

updateAuthors();