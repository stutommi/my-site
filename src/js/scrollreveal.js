
var slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 500
};

var slideLeft = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    // delay: 500,
    mobile: false
};

var slideRight = {
    distance: '100%',
    origin: 'right',
    opacity: 0,
    delay: 500,
    mobile: false
};

var rotate = {
    rotate: {
        y: 90
    },
    mobile: false
}

// Reveal
ScrollReveal().reveal('.reveal');

// Delays
ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);
ScrollReveal().reveal('.delay-025', {delay: 250});
ScrollReveal().reveal('.delay-05', {delay: 500});
ScrollReveal().reveal('.delay-1', {delay: 1000});
ScrollReveal().reveal('.delay-2', {delay: 2000});
ScrollReveal().reveal('.delay-3', {delay: 3000});
ScrollReveal().reveal('.delay-4', {delay: 4000});
ScrollReveal().reveal('.delay-5', {delay: 5000});
ScrollReveal().reveal('.delay-6', {delay: 6000});
ScrollReveal().reveal('.delay-7', {delay: 7000});
ScrollReveal().reveal('.delay-8', {delay: 8000});
ScrollReveal().reveal('.delay-9', {delay: 9000});
ScrollReveal().reveal('.delay-10', {delay: 10000});

// Non-mobile delays
ScrollReveal().reveal('.delay-m-025', {delay: 250, mobile: false});
ScrollReveal().reveal('.delay-m-05', {delay: 500, mobile: false});
ScrollReveal().reveal('.delay-m-1', {delay: 1000, mobile: false});
ScrollReveal().reveal('.delay-m-2', {delay: 2000, mobile: false});
ScrollReveal().reveal('.delay-m-3', {delay: 3000, mobile: false});
ScrollReveal().reveal('.delay-m-4', {delay: 4000, mobile: false});
ScrollReveal().reveal('.delay-m-5', {delay: 5000, mobile: false});
ScrollReveal().reveal('.delay-m-6', {delay: 6000, mobile: false});
ScrollReveal().reveal('.delay-m-7', {delay: 7000, mobile: false});
ScrollReveal().reveal('.delay-m-8', {delay: 8000, mobile: false});
ScrollReveal().reveal('.delay-m-9', {delay: 9000, mobile: false});
ScrollReveal().reveal('.delay-m-10', {delay: 10000, mobile: false});

// Non-mobile Intervals
ScrollReveal().reveal('.sequenced-m-1', { interval: 100, mobile: false});
ScrollReveal().reveal('.sequenced-m-2', { interval: 100, mobile: false});
ScrollReveal().reveal('.sequenced-m-3', { interval: 200, mobile: false});

// Non-mobile Intervals
ScrollReveal().reveal('.sequenced-1', { interval: 100});
ScrollReveal().reveal('.sequenced-2', { interval: 100});
ScrollReveal().reveal('.sequenced-3', { interval: 200});
ScrollReveal().reveal('.sequenced-4', { interval: 100, origin: 'left', distance: '100%'});

// Rotattions
ScrollReveal().reveal('.rotate', rotate);

