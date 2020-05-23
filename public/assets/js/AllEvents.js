function updateEvents() {
    $.get(`/events`)
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

  let current = new Date();
  console.log(current);
  for (let i = 0; i < doc.length; i++) {
    let date_string = doc[i].date;
    let date_values = date_string.split('/')
    let event_date = new Date(parseInt(date_values[2]), parseInt(date_values[1]) - 1, parseInt(date_values[0]));

    console.log(event_date);

    if ( current <= event_date) {
      console.log("event this month: " + event_date.toDateString())
      $("#events-list").append(
          `
            <div class="card m-2 card-fixed-width">
                <div class="card-body">
                    <h5 class="card-title">${doc[i].title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${doc[i].date}</h6>
                    <a href="event.html?id=${doc[i].id}" class="card-link">See event</a>
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

updateEvents();