
//PORTFOLIO LOGIC =============================================
const MORE_BUTTON = document.querySelector(".moreImgButton");//кнопка для загрузки большего числа картинок
const IMG_BOX = document.querySelector(".imgBox");//контейнер колонок
const COLUMNS =  document.getElementsByClassName("col");//объект с колонками
const IMG = document.getElementsByClassName('img');//объект с изображениями

var add_last_img = function(i, columns) { // функция добавляет последнее изображение
    setTimeout(() => {
        let minHeight = COLUMNS[0].offsetHeight;
        Array.from(COLUMNS).forEach((item, index) => {
            if (item.offsetHeight < minHeight) {
                minHeight = item.offsetHeight;
                columns = index;
            };
        });
        add_new_imgs(i, columns);
    }, 0);
};

var add_new_imgs = function(i, columns) { //функция добавляет все изображения кроме последнего
    COLUMNS[columns].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img" src="img/main/home/imgBox/img${i}.jpg" alt=""><a></div>`;
};

var create_columns = function(totalColumns) { //создаёт необходимое количиство столбцов
    let i = 0
    for (; i <= totalColumns; i++) {
        IMG_BOX.innerHTML += `<div class="col col-${i}"></div>`;
    };
    i--;
    COLUMNS[i].classList.add("col-last");
};

function PRE_logic_distribution_img(totalColumns) { //замыкание
    var totalImgMax = 15; //максимально допустимое количество картинок
    var totalImg = 0; //текущее количество картинок
    var i = 1; //простой итератор
    let columns = 0; //индекс столбца
    totalColumns--;
    create_columns(totalColumns);

    return function(n) { //n - число картинок которое загружается при каждом вызове функции
        totalImg += n;
        for (; i <= totalImg; i++) {
            if (i <= totalImgMax) { //проверка на макусимально допустимое число изображений
                if (i == totalImg || i == totalImgMax) {
                    add_last_img(i, columns);
                    i++;
                    break;
                };
                add_new_imgs(i, columns);
            }
            if (columns == totalColumns) columns = 0 //ограничитель столбцов
            else columns++;
        };
    };
};

var logic_distribution_img = PRE_logic_distribution_img(3); //вызов замыканя (3 - количество столбцов)
window.onload = logic_distribution_img(10); //вызов функции при закрузке страницы (10 - количество загружаемых изображений)

MORE_BUTTON.addEventListener('click', () => { //вызов функции при клике по кнопке
    logic_distribution_img(10);
});

