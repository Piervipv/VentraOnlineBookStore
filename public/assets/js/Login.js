dynamicPrivateArea();

$('#loginForm').on('submit', function (event) {
    event.preventDefault();

    var form_data = {
        "email": $('#inputEmail').val(),
        "password": $('#inputPassword').val()
    };

    $.ajax({
        url: "/user/login",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(form_data)
    })
        .done(function (data, textStatus, jqXHR){
            if(jqXHR.status === 200){
                console.log(textStatus + ':' + data.message);

                setCookie(data.session_id, 0.25);

                if(document.referrer.split('/')[3] === 'register.html'){

                    $('#loginForm').append(
                        `
                            <div class="alert alert-success m-3" role="alert">
                                ${data.message}
                            </div>
                            `
                    );

                    window.setTimeout(function(){

                        window.location.href = 'index.html';

                    }, 1000);
                }else{

                    $('#loginForm').append(
                        `
                            <div class="alert alert-success m-3" role="alert">
                                ${data.message}
                            </div>
                            `
                    );

                    window.setTimeout(function(){

                        window.location.href = document.referrer;

                    }, 1000);
                }
            }else{
                console.log(textStatus + ':' + data.message);
                $('#loginForm').append(
                    `
                    <div class="alert alert-warning m-3" role="alert">
                        ${data.message}
                    </div>
                    `
                )
            }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.log(textStatus + ':' + errorThrown);
            $('#loginForm').append(
                `
                    <div class="alert alert-danger m-3" role="alert">
                        ${jqXHR.responseJSON.message}
                    </div>
                    `
            )
        })

});

function setCookie(value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
    }
    $.cookie("JSESSIONID", value, {expires: date});
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