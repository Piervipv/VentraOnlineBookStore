$('#privateArea').on('click', '#logoutBtn', function (event) {
    event.preventDefault();

    $.ajax({
        url: "/user/logout",
        type: "POST",
        dataType: "json"
    })
        .done(function (data, textStatus, jqXHR){
            if(jqXHR.status === 200){
                console.log(textStatus + ':' + data.message);

                resetCookie("JSESSIONID");

                alert(data.message);

                location.reload();
            }else{
                console.log(textStatus + ':' + data.message);
                $('#loginForm').append(
                    `
                    <div class="alert alert-danger m-3" role="alert">
                        ${data.message}
                    </div>
                    `
                )
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown){
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

function resetCookie(name) {
    $.removeCookie(name);
}