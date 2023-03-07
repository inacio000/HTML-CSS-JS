const showHidePass = document.querySelector(".uil-eye-slash"),
    passField = document.querySelector(".password");

showHidePass.addEventListener('click', function showHidePassWord () {
    if(passField.type === "text") {
        passField.type = "password";
    } else {
        passField.type = "text";
    }
})