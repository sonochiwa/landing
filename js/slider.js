let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slides = document.querySelector('.slides');
let dots = document.querySelector('.dots');
let item;
let x = 0;
let scrolls = 0;
let lastchild = slides.lastElementChild;
let count = slides.children.length;
let dotNumber = 0;
slides.children[scrolls].getAttribute('value');

dots.children[dotNumber].classList.add('active-dot');
document.querySelector('.next').addEventListener('click', function () {
    next.disabled = true;
    let intervalPlus = setInterval(function () {
        if (x == -400) {
            clearInterval(intervalPlus);
            x = 0;
            item = slides.children[scrolls];
            slides.appendChild(item);
            slides.style.marginLeft = 0;
            next.disabled = false;

            for (let i = 0; i <= dots.children.length - 1; i++) {
                dots.children[i].classList.remove('active-dot');
            }
            dotNumber = slides.children[scrolls].getAttribute('value');
            dots.children[dotNumber].classList.add('active-dot');

        } else {
            slides.style.marginLeft = parseInt(slides.style.marginLeft || 0) - 2 + 'px';
            x -= 2;
        }
    }, 1);
});

document.querySelector('.prev').addEventListener('click', function () {
    prev.disabled = true;
    item = slides.children[scrolls];
    slides.insertBefore(slides.lastElementChild, item);
    slides.style.marginLeft = -400 + 'px';

    for (let i = 0; i <= dots.children.length - 1; i++) {
        dots.children[i].classList.remove('active-dot');
    }
    dotNumber = slides.children[scrolls].getAttribute('value');
    dots.children[dotNumber].classList.add('active-dot');

    let intervalMinus = setInterval(function () {
        if (x == 400) {
            clearInterval(intervalMinus);
            x = 0;
            prev.disabled = false;
        } else {
            slides.style.marginLeft = parseInt(slides.style.marginLeft || 0) + 2 + 'px';
            x += 2;
        }
    }, 1);
});

function goToDot(obj) {
    value = obj.getAttribute('value');
    if (item) {
        console.log(item);
    } else {
        item = slides.children[0];
    }
    slides.style.marginLeft = (-400 * value) + 'px';
    for (let i = 0; i <= dots.children.length - 1; i++) {
        dots.children[i].classList.remove('active-dot');
    }
    dots.children[value].classList.add('active-dot');
}