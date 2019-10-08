"use strict"

document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    let captcha = getCaptcha();
    document.getElementById("mainCaptcha").innerHTML = captcha;
    document.getElementById("mainCaptcha").value = captcha;
})

function getCaptcha() {
    const CAPTCHA_LENGTH = 7;
    let captcha = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
        captcha += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return captcha;
}

document.getElementById("submitFormButton").addEventListener("click", function (event) {
    event.preventDefault();
    let originalCaptcha = document.getElementById("mainCaptcha").value;
    let inputCaptcha = document.getElementById("captchaText").value;
    if (originalCaptcha == inputCaptcha) {
        alert("El captcha es valido.");
    } else {
        alert("Error: intente nuevamente");
    }
})

