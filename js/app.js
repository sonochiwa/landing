// cookies
const cookies = document.querySelector('.cookies');
const cookiesOkBtn = document.querySelector('.cookies__btn');

function showBlock() {
    cookies.classList.add('enabled');
}

function deleteBlock() {
    cookies.remove(cookies);
}

cookiesOkBtn.onclick = function () {
    cookies.classList.add('disabled');
    setTimeout(deleteBlock, 600);
};

// setTimeout(showBlock, 1000);


// form error
const sendBtn = document.querySelector('.get-in-touch__btn');
const errorInput = document.querySelectorAll('.get-in-touch__input');
const errorArea = document.querySelector('.get-in-touch__area');

sendBtn.onclick = function () {
    for (let i = 0, ilen = errorInput.length; i < ilen; i++) {
        errorInput[i].classList.add('error');
    }
    errorArea.classList.add('error');
};

// our-mission starts
let missionText = document.querySelector('.our-mission__text');
let enabledPhone = document.querySelector('.our-mission__phone');

function deleteTextFunc() {
    missionText.remove(missionText);
}

if (screen.width > 1199) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(missionText).offset().top - 500) {
            missionText.classList.add('text-hidden');
            enabledPhone.classList.add('phone-enabled');
            setTimeout(deleteTextFunc, 3000);
        }
    });
}