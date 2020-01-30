
// SLIDER LOGIC ======================================================
const SLIDER_BUTTONS = document.querySelectorAll(".button"); //правая кнопка слайдера
const RADIO_BUTTONS = Array.from(document.querySelectorAll('.radioButtons')); //радио кнопки переключения слайдера
const SLIDES = document.querySelector(".slides"); //контейнер со слайдами
let nextRadio;

window.onload = setInterval(() => search_checked_radio("right"), 3500);

function search_checked_radio(moveDirection) { //поиск активной радио кнопки
    RADIO_BUTTONS.some(function(item, i, arr) {
        if (item.checked) {
            move_slides(i, arr, moveDirection);
            return true;
        };
    });
};

function move_slides(i, arr, moveDirection) { //выбор направления переключения слайдов
    switch(moveDirection) {
        case("right"):
            if (arr[i+1] === undefined) {
                nextRadio = arr[0];
            } else {
                nextRadio = arr[i+1];
            };
            break;
        case("left"):
            if (arr[i-1] === undefined) {
                nextRadio = arr[arr.length-1];
            } else {
                nextRadio = arr[i-1];
            };
            break;
    };
    anim_slide(nextRadio, arr);
};

function anim_slide(nextRadio, arr) { //анимация переключения слайдов
    nextRadio.checked = true;
    SLIDES.style = `margin-left: -${arr.indexOf(nextRadio)*100}%`
};

SLIDER_BUTTONS.forEach(item => { //боковые кнопки ручного переключения слайдов
    item.addEventListener("click", () => {
        search_checked_radio(`${item.value}`);
    });
});

RADIO_BUTTONS.forEach((item, i, arr) => { //ражио кнопки переключения слайдов
    item.addEventListener('click', () => {
        anim_slide(item, arr);
    });
});