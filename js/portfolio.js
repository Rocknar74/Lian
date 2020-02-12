
//PORTFOLIO LOGIC =============================================
const MORE_BUTTON = document.querySelector(".moreImgButton");//кнопка для загрузки большего числа картинок
const IMG_BOX = document.querySelector(".imgBox");//контейнер колонок
const COLUMNS =  document.getElementsByClassName("col");//объект с колонками
const IMG = document.getElementsByClassName('img');//объект с изображениями

var add_last_img = function(count, column) { // функция добавляет последнее изображение
    setTimeout(() => {
        let minHeight = COLUMNS[0].offsetHeight;
        Array.from(COLUMNS).forEach((item, index) => {
            if (item.offsetHeight < minHeight) {
                minHeight = item.offsetHeight;
                column = index;
            };
        });
        add_new_imgs(count, column);
    }, 1);
};

var add_new_imgs = function(count, column) { //функция добавляет все изображения кроме последнего
    COLUMNS[column].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img" src="img/main/home/imgBox/img${count}.jpg" alt=""><a></div>`;
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
    var totalImgsMax = 15; //максимально допустимое количество картинок
    var totalImgs = 0; //текущее количество картинок
    var count = 1; //простой итератор
    let column = 0; //индекс столбца
    totalColumns--;
    create_columns(totalColumns);

    return function(imgs_per_load) {
        totalImgs += imgs_per_load;
        for (; count <= totalImgs; count++) {
            if (count <= totalImgsMax) { //проверка на макусимально допустимое число изображений
                if (count == totalImgs || count == totalImgsMax) {
                    add_last_img(count, column);
                    count++;
                    break;
                };
                add_new_imgs(count, column);
            }
            if (column == totalColumns) column = 0 //ограничитель столбцов
            else column++;
        };
    };
};

var totalColumns = 3; //количество столбцов
var imgs_per_load = 10; //количество загружаемых изображений за раз

var logic_distribution_img = PRE_logic_distribution_img(totalColumns); //вызов замыканя
window.onload = logic_distribution_img(imgs_per_load); //вызов функции при закрузке страницы

MORE_BUTTON.addEventListener('click', () => { //вызов функции при клике по кнопке
    logic_distribution_img(imgs_per_load);
});
