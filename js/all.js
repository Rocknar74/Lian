
// SCROLL
//==============================================
const HEADER = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (pageYOffset > 0) {
        HEADER.classList.add("header-scroll");
    } else {
        HEADER.classList.remove("header-scroll");
    };
});



//SEARCH
//===================================================
const FORM = document.querySelector('.form-headerSearch');
const SEARCH = document.getElementById('headerSearch');
const LOOP = document.getElementById('headerLoop');

SEARCH.addEventListener('focus', () => {
    FORM.classList.add('form-active');
    LOOP.style = `opacity: 50%; pointer-events: none`
});
SEARCH.addEventListener('blur', () => {
    FORM.classList.remove('form-active');
    LOOP.style = `opacity: 1; pointer-events: initial`
});