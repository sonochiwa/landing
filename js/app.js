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
// let hiddenText = document.querySelector('.our-mission__text-inner');
// let deleteText = document.querySelector('.our-mission__text');
// let enabledPhone = document.querySelector('.our-mission__phone');

// function deleteTextFunc() {
//     deleteText.remove(deleteText);
// }

// $(window).scroll(function () {
//     if ($(this).scrollTop() > $(hiddenText).offset().top - 500) {
//         hiddenText.classList.add('text-hidden');
//         setTimeout(deleteTextFunc, 3000);
//     }
// });