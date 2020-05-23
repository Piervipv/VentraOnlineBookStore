$.get(
    `/user/cart`
)
    .done(function(data, textStatus, jqXHR) {
        if(jqXHR.status === 200) {
            console.log(textStatus);
            return fillPage(data.message);
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus + ':' + errorThrown);
        $('#booksList').append(
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


function fillPage(doc) {

    if(doc.length > 0){
        for(var i=0; i<doc.length; i++){
            let book_picture =String(doc[i].picture)+'-mini.jpg';
            let alt_picture = String(doc[i].title)+' picture';
            let btn_id="btn-" + doc[i].isbn;
            let isbn = doc[i].isbn;
            $('#booksList').append(`
            <div class="row">
                <div class="col-sm-2 text-center">
                    <a href="book.html?isbn=${doc[i].isbn}">
                        <img src=${book_picture} alt=${alt_picture} class="img-thumbnail m-3">
                    </a>
                </div>
                <div class="col-sm-8 align-self-center">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-6 align-self-center text-center">
                                <p class="h5">${doc[i].title}</p>
                                <p class="text-muted">ISBN: ${doc[i].isbn}</p>
                            </div>
                            <div class="col-sm-4 align-self-center text-center">
                                <p class="h5">${doc[i].price}</p>
                                <p class="text-muted">${doc[i].format}</p>
                            </div>
                            <div class="col-sm-2 align-self-center text-center">
                                <p class="text-muted">Quantity: ${doc[i].quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 text-center align-self-center">
                    <button type="button" class="btn btn-outline-danger m-1" id=${btn_id}>Remove</button>
                </div>
            </div>
            <hr>
            `);

            $(document).on('click',"#btn-" + isbn, function removeFromCart(event){
                event.preventDefault();

                $.ajax({
                    url: `/books/${isbn}/removeFromCart`,
                    type: "POST",
                    dataType: "json"
                })
                    .done((data, textStatus, jqXHR) => {
                        if(jqXHR.status === 200){
                            console.log(textStatus + ':' + data.message);
                            alert(data.message);
                            location.reload();
                        }else{
                            console.log(textStatus + ':' + data.message);
                            $('#container').prepend(`
                                <div class="alert alert-alert alert-dismissible fade show" role="alert"> ${data.message}
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
                    });
            })
        }

        var total = 0;
        for(var i=0; i<doc.length; i++){
            var split = doc[i].price.split(' ');
            total = total + (parseFloat(split[1]) * parseInt(doc[i].quantity));
        }
        $('#booksList').append(`
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-4">
                </div>
                <div class="col-md-6 text-center align-self-center">
                    <a class="h2"><b>Total:</b></a>
                    <a class="h3"><b>${total.toFixed(2)} €</b></a>
                </div>
            </div>
        `);
    }else{
        $('#booksList').append(`
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="h4">
                        Your cart is empty.
                    </div>
                </div>
            </div>
        `)
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