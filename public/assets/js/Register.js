dynamicPrivateArea();

$('#registerForm').on('submit', function (event) {
    event.preventDefault();

    var form_data = {
        "firstname": $('#inputFirstname').val(),
        "lastname": $('#inputLastname').val(),
        "email": $('#inputEmail').val(),
        "password": $('#inputPassword').val()
    };

    $.ajax({
        url: "/user/register",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(form_data)
    })
        .done((data, textStatus, jqXHR) => {
            if(jqXHR.status === 200){
                console.log(textStatus + ':' + data.message);

                $('#registerForm').append(
                    `
                    <div class="alert alert-success m-3" role="alert">
                        ${data.message}
                    </div>
                    `
                );

                window.setTimeout(function(){

                    window.location.href = 'login.html';

                }, 1000);
            }else{
                console.log(textStatus + ':' + data.message);
                $('#registerForm').append(
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
            $('#registerForm').append(
                `
                    <div class="alert alert-danger m-3" role="alert">
                        ${jqXHR.responseJSON.message}
                    </div>
                    `
            )
        })

});

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