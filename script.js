let sliders = 10;

new Splide('#slider1', {
    type: 'loop',
    autoplay: true,
    interval: 4000,
    speed: 1000,
}).mount();



try {
    for (let i = 2; i < sliders; i++) {
        new Splide(`#slider${i}`, {
            pagination: false,
            perMove: 1,
            perPage: 5,
            gap: padding = '1rem',
            autoWidth: false,
            breakpoints: {
                1200: {
                    perPage: 3,
                },

                768: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                }
            }
        }).mount();
    }
} catch (error) {
    console.log(error);
}


const cards = document.querySelectorAll('.special');

cards.forEach(function (cards) {
    let Image = cards.querySelector('img');
    cards.querySelector('.online').style.display = 'none';
    cards.querySelector('.timing').style.display = 'none';


    cards.addEventListener('mouseover', () => {
        Image.style.setProperty('filter', 'blur(5px)');
        cards.style.transition = '1s';
        cards.querySelector('.online').style.display = 'block';
        cards.querySelector('.timing').style.display = 'block';
    });

    cards.addEventListener('mouseout', () => {
        Image.style.removeProperty('filter');
        cards.querySelector('.timing').style.display = 'none';
        cards.querySelector('.online').style.display = 'none';
    });


});

const timer = document.querySelector('.timer');
const days = timer.querySelector('.days');
const hours = timer.querySelector('.hours');
const mins = timer.querySelector('.mins');


let min = 59;
let hour = 23;
let day = 9;
function addZero(time) {
    parseInt(time.innerHTML)
    if (time < 10) {
        return `0${time}`;
    }
    return `${time}`;
}
setInterval(() => {
    minss = addZero(min);
    hourss = addZero(hour);
    dayss = addZero(day);
    mins.innerHTML = minss;
    hours.innerHTML = hourss;
    days.innerHTML = dayss;
    min--;
    if (min < 0) {
        min = 59;
        hour--;
    }

    if (hour < 0) {
        hour = 23;
        day--;
    }

}, 1000);

