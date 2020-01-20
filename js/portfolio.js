
//PORTFOLIO LOGIC =============================================
const MORE_BUTTON = document.querySelector(".moreImgButton");//кнопка для загрузки большего числа картинок
const IMG_BOX = document.querySelector(".imgBox");//контейнер колонок
const COLUMNS = document.querySelectorAll(".col");//объект с колонками
var IMG;

function PREaddNewImg() { //замыкание
    var totalImgMax = 15; //максимально допустимое число картинок
    var totalImg = 0; //текущее число картинок
    var i = 1;
    return function(n) { //n - число картинок которое загружается при каждом вызове функции
        let count = 0;
        // let minHeight;
        totalImg += n;
        for (; i <= totalImg; i++) {
            if (i <= totalImgMax) { //проверка на макусимально допустимое число изображений
                if (i == totalImg || i == totalImgMax) {
                    // minHeight = COLUMNS[0].offsetHeight;

                    // COLUMNS.forEach((item, index) => {
                    //     if (item.offsetHeight < minHeight) {
                    //         console.log(item.offsetHeight);
                    //         minHeight = item.offsetHeight;
                    //         count = index;
                    //     };
                    // });
                    
                    addLastImg(i, count)
                    i++;
                    break;
                };

                IMG_BOX.children[count].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img picture${i}" src="img/main/home/imgBox/img${i}.jpg" alt=""><a></div>`;
            } else {
                break;
            };
            switch(count) {
                case(2):
                    count = 0;
                    break;
                default:
                    count++
                    break;
            };
        
            // var img = document.querySelectorAll('.img');
            // img.forEach(item => {
            //     item.addEventListener('click', () => {
            //         location.href = `portfolio-details.html`;
            //     });
            // });
        };
    };
};

var addLastImg = function(i, count) {
    setTimeout(() => {
    let minHeight = COLUMNS[0].offsetHeight;

    COLUMNS.forEach((item, index) => {
        if (item.offsetHeight < minHeight) {
            minHeight = item.offsetHeight;
            count = index;
        };
    });
    console.log(22);
    
    IMG_BOX.children[count].innerHTML += `<div class="containerImg"><a href="portfolio-details.html"><img class="img picture${i}" src="img/main/home/imgBox/img${i}.jpg" alt=""><a></div>`;
    }, 300);
};

var addNewImg = PREaddNewImg(); //вызов замыканя
window.onload = addNewImg(10); //вызов функции при закрузке страницы

MORE_BUTTON.addEventListener('click', () => { //вызов функции при клике по кнопке
    addNewImg(10);
});

