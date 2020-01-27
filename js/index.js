
// SLIDER LOGIC ======================================================
const SLIDER_BUTTONS = document.querySelectorAll(".button"); //правая кнопка слайдера
const RADIO_BUTTONS = document.querySelectorAll('.radioButtons'); //радио кнопки переключения слайдера
const SLIDES = document.querySelector(".slides"); //контейнер со слайдами
let nextRadio;

window.onload = setInterval( () => search_checkedRadio("right"), 3500);

function search_checkedRadio(moveDirection) { //поиск активной радио кнопки
    Array.from(RADIO_BUTTONS).some(function(item, i, arr) {
        if (item.checked) {
            moveSlides(i, arr, moveDirection);
            return true;
        };
    });
};

function moveSlides(i, arr, moveDirection) { //выбор направления переключения слайдов
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
    animSlide(nextRadio, arr);
};

function animSlide(nextRadio, arr) { //анимация переключения слайдов
    nextRadio.checked = true;
    SLIDES.style = `margin-left: -${arr.indexOf(nextRadio)*100}%`
};

SLIDER_BUTTONS.forEach(item => { //боковые кнопки ручного переключения слайдов
    item.addEventListener("click", () => {
        search_checkedRadio(`${item.value}`);
    });
});

RADIO_BUTTONS.forEach(item => { //ражио кнопки переключения слайдов
    item.addEventListener('click', () => {
        animSlide(item);
    });
});



// PORTFOLIO LOGIC // 
//=============================================
const MORE_BUTTON = document.querySelector(".moreImgButton");//кнопка для загрузки большего числа картинок
const IMG_BOX = document.querySelector(".imgBox");//контейнер колонок
var COLUMNS =  document.getElementsByClassName("col");//объект с колонками
var IMG = document.getElementsByClassName('img');//объект с изображениями

var add_LastImg = function(i, columns) { // функция добавляет последнее изображение
    setTimeout(() => {
        let minHeight = COLUMNS[0].offsetHeight;
        Array.from(COLUMNS).forEach((item, index) => {
            if (item.offsetHeight < minHeight) {
                minHeight = item.offsetHeight;
                columns = index;
            };
        });
        add_NewImg(i, columns);
    }, 1);
};

var add_NewImg = function(i, columns) { //функция добавляет все изображения кроме последнего
    COLUMNS[columns].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img" src="img/main/home/imgBox/img${i}.jpg" alt=""><a></div>`;
};

var createColumns = function(totalColumns) {
    let i = 0
    for (; i <= totalColumns; i++) {
        IMG_BOX.innerHTML += `<div class="col col-${i}"></div>`;
    };
    i--;
    COLUMNS[i].classList.add("col-last");
};

function PRE_logicDistributionImg(totalColumns) { //замыкание
    var totalImgMax = 15; //максимально допустимое количество картинок
    var totalImg = 0; //текущее количество картинок
    var i = 1; //простой итератор
    let columns = 0; //индекс столбца
    totalColumns--;
    createColumns(totalColumns);
    return function(n) { //n - число картинок которое загружается при каждом вызове функции
        totalImg += n;
        for (; i <= totalImg; i++) {
            if (i <= totalImgMax) { //проверка на макусимально допустимое число изображений
                if (i == totalImg || i == totalImgMax) {
                    add_LastImg(i, columns);
                    i++;
                    break;
                };
                add_NewImg(i, columns);
            }
            switch(columns) { //ограничитель столбцов
                case(totalColumns):
                    columns = 0;
                    break;
                default:
                    columns++
                    break;
            };
        };
    };
};

var logicDistributionImg = PRE_logicDistributionImg(3); //вызов замыканя (3 - количество столбцов)
window.onload = logicDistributionImg(10); //вызов функции при закрузке страницы

MORE_BUTTON.addEventListener('click', () => { //вызов функции при клике по кнопке
    logicDistributionImg(10);
});