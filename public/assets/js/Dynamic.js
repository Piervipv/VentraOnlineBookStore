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