let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slides = document.querySelector('.slides');
let dots = document.querySelector('.dots');
let slide = 0;
let size = slides.children[0].offsetWidth;
let count = slides.children.length;
let first = slides.firstElementChild;
let cloneFirst = first.cloneNode(true);
last = slides.lastElementChild;
cloneLast = last.cloneNode(true);
slides.insertBefore(cloneFirst, last.nextSubling);
slides.insertBefore(cloneLast, first);
slides.style.marginLeft = -size + 'px';

function dot() {
    for (let element of dots.children) {
        element.classList.remove('active-dot');
    }
    dots.children[slide].classList.add('active-dot');
}

dot();

function shift(dir, callback = function () { }) {
    let position = 0;
    let interval = setInterval(function () {
        if (position >= size) {
            clearInterval(interval);
            callback();
        } else {
            slides.style.marginLeft = parseInt(slides.style.marginLeft || 0) - (dir * 2) + 'px';
            position += 2;
        }
    }, 1);
}

function forward(callback) {
    if (slide + 1 == count) {
        shift(1, function () {
            slides.style.marginLeft = parseInt(slides.style.marginLeft || 0) + (size * count) + 'px';
        });
        slide = 0;
    } else {
        shift(1);
        slide++;
    }
    dot();
    setTimeout(callback, 1000);
}

function backward(callback) {
    if (slide - 1 < 0) {
        shift(-1, function () {
            slides.style.marginLeft = parseInt(slides.style.marginLeft || 0) - (size * count) + 'px';
        });
        slide = count - 1;
    } else {
        shift(-1);
        slide--;
    }
    dot();
    setTimeout(callback, 1000);
}

function target(index) {
    dots.children[index].onclick = function () {
        let steps = Math.abs(index - slide);
        for (let i = 0; i < steps; i++) {
            if (index > slide) {
                forward();
            } else {
                backward();
            }
        }
    };
}

for (let i = 0; i < dots.children.length; i++) {
    target(i);
}

next.addEventListener('click', function () {
    next.disabled = true;
    forward(function () {
        next.disabled = false;
    });
});

prev.addEventListener('click', function () {

    prev.disabled = true;
    backward(function () {
        prev.disabled = false;
    });
});