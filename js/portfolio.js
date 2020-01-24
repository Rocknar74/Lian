
//PORTFOLIO LOGIC =============================================
const MORE_BUTTON = document.querySelector(".moreImgButton");//кнопка для загрузки большего числа картинок
const IMG_BOX = document.querySelector(".imgBox");//контейнер колонок
const COLUMNS = document.querySelectorAll(".col");//объект с колонками
var IMG = document.getElementsByClassName('img');//объект с изображениями

var add_LastImg = function(i, count) { // функция добавляет последнее изображение
    setTimeout(() => {
        let minHeight = COLUMNS[0].offsetHeight;
        COLUMNS.forEach((item, index) => {
            if (item.offsetHeight < minHeight) {
                minHeight = item.offsetHeight;
                count = index;
            };
        });
        add_NewImg(i, count);
    }, 1);
};

var add_NewImg = function(i, count) { //функция добавляет все изображения кроме последнего
    IMG_BOX.children[count].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img" src="img/main/home/imgBox/img${i}.jpg" alt=""><a></div>`;
};

function PRE_logicDistributionImg() { //замыкание
    var totalImgMax = 15; //максимально допустимое число картинок
    var totalImg = 0; //текущее число картинок
    var i = 1; //простой итератор
    let count = 0; //номер столбца
    return function(n) { //n - число картинок которое загружается при каждом вызове функции
        totalImg += n;
        for (; i <= totalImg; i++) {
            if (i <= totalImgMax) { //проверка на макусимально допустимое число изображений
                if (i == totalImg || i == totalImgMax) {
                    Array.from(IMG).forEach(item => { //ожидание загрузки всех изображений перед добавлением последнего
                        item.addEventListener('readystatechange', console.log("img - load")
                        );
                    });
                    add_LastImg(i, count);
                    continue;
                };
                add_NewImg(i, count);
            }
            switch(count) { //ограничитель ряда
                case(2):
                    count = 0;
                    break;
                default:
                    count++
                    break;
            };
        };
    };
};

var logicDistributionImg = PRE_logicDistributionImg(); //вызов замыканя
window.onload = logicDistributionImg(10); //вызов функции при закрузке страницы

MORE_BUTTON.addEventListener('click', () => { //вызов функции при клике по кнопке
    logicDistributionImg(10);
});

