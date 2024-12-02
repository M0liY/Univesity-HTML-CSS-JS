const slider = document.querySelector('#slider');
const images = slider.querySelectorAll('.photo img');
const btnNav = slider.querySelectorAll('.btn-nav a');
const btnStopStart = slider.querySelectorAll('.play a');
const dots = slider.querySelectorAll('.dots a')
let count = 0;
let timer = 0;

function prev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    showImg(count);
}
function next() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }
    showImg(count);
}
function showImg(count) {
    for (let i = 0; i < images.length; i++) {
        if (i == count) {
            images[i].style.opacity = 1;
        } else {
            images[i].style.opacity = 0;
        }
    }
}

function playSlider() {
    stopSlider();
    timer = setInterval(next, 2000);
}

function stopSlider() {
    if (timer) {
        clearInterval(timer);
        timer = 0;
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        count = i;
        showImg(i);
    });
}
btnNav[0].addEventListener('click', prev);
btnNav[1].addEventListener('click', next);
btnStopStart[0].addEventListener('click', function () {
    playSlider();
})
btnStopStart[1].addEventListener('click', function () {
    stopSlider();
})

