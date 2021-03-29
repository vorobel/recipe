$(document).ready(function () {
    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

(function () {
    const body = document.querySelector('body');
    const burger = document.querySelector('.burger');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const closeLogin = document.querySelector('.close-login');
    const closeSignup = document.querySelector('.close-signup');


    burger.addEventListener('click', () => {
        body.classList.toggle('popup_open')
        burger.classList.toggle('burger_active');
    });

    loginBtn.addEventListener('click', (e) => {
        body.classList.toggle('login_open');
    });

    signupBtn.addEventListener('click', (e) => {
        body.classList.toggle('signup_open');
    });

    closeLogin.addEventListener('click', (e) => {
        body.classList.toggle('login_open');
    });

    closeSignup.addEventListener('click', (e) => {
        body.classList.toggle('signup_open');
    });


}());

function counter(max, t, elem) {
    let i = 0;
    let step = max / steps;
    if (max > steps) {
        i = max % steps;
    }

    let inerval = setInterval(function () {
        elem.innerHTML = Math.round(i);
        i = i + step;
        if (i > max) {
            clearInterval(inerval);

            i = max;
            i = formatNumber(i);
            elem.innerHTML = i;
        }
    }, t / steps * 1000);
}


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}



function unformatNumber(num) {
    return num.toString().replace(/[\s.,%]/g, '')
}


window.onload = () => {
    num = document.querySelectorAll(".counter-item-number");
    steps = 300;
    duration = 2;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const obscounter = entry.target

                num.forEach(n => {
                    let u = n.innerText;
                    counter(unformatNumber(u), duration, n);
                })
                observer.unobserve(obscounter)
            }
        })
    }, options)
    observer.observe(document.querySelector("#counter-wrapper"))
};