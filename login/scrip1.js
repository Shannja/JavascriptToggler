const submitLogin = document.getElementById('submitLogin');

submitLogin.addEventListener("click", function () {
    window.location.href = '/';
});

function check() {
    if (window.location == '/Bootstrap/login/#' || window.location == '/?') {
        window.location.href = '/';
    }
}

setInterval(check, 1000);