

// SIDEBAR - POPULAR TAGS LOGIC
//==================================================
const CONTAINER_TAGS = document.querySelector('.containerTags'); //контейнер тегов
var arrTags = [ //массив с тегами
    "construction",
    "engineering",
    "architecture",
    "structural design",
    "civil engineer",
    "industrial",
    "managment",
    "mechanical",
];

arrTags.forEach(item => { //загрузка всех тегов на страницу
    CONTAINER_TAGS.innerHTML += `<p class="personal__containerTag">${item}</p>`;
})

const PERSONAL_CONTAINERS_TAGS = document.querySelectorAll('.personal__containerTag'); //персональный контейнер тега
const PERSONAL_CONTAINERS_TAGS_ACTIVE = 'tag-active' //класс активного тега

function clean_items (obj, newClassObj, thisObj) { //если выбранный тег уже сожержит активынй класс, то удаляется класс, если нет, то вызывается функции добавленя активного класса
    if (thisObj.classList.contains(newClassObj)){
        thisObj.classList.remove(newClassObj);
    } else {
        add_items(obj, newClassObj, thisObj);
    };
};

function add_items (obj, newClassObj, thisObj) {
    obj.forEach(item => { // отчищаем все элементы от активных классов
        item.classList.remove(newClassObj);
    }); // добавляем выбранному элементу активный класс
    thisObj.classList.add(newClassObj);
}

PERSONAL_CONTAINERS_TAGS.forEach(item => {
    item.addEventListener("click", () => {
        clean_items(PERSONAL_CONTAINERS_TAGS, PERSONAL_CONTAINERS_TAGS_ACTIVE, item)
    })
})


// SIDEBAR - INSTAGRAM LOGIC
const CONT_INSTAGRAM = document.querySelector('.container__instagramImg'); //контейнер изображений из инстаграма

function addNewImg(totalImg_site, totalImg_folder) { //функция добавляет изображения в случайном порядке
    var arr = [];
    arr[0] = Math.floor(Math.random() * totalImg_folder) + 1;
    CONT_INSTAGRAM.innerHTML += `<div class="personal__containerImg"><img src="img/main/blog/main/sidebar/instagram/${arr[0]}.jpg" alt=""></div>`;
    for (let i = 1; i < totalImg_site; i++) {
        let rand = Math.floor(Math.random() * totalImg_folder) + 1;
        let go = arr.some(item => {
            return rand == item;
        });
        if (go) {
            i--;
        } else {
            arr[i] = rand;
            console.log(arr[i]);
            CONT_INSTAGRAM.innerHTML += `<div class="personal__containerImg"><img src="img/main/blog/main/sidebar/instagram/${rand}.jpg" alt=""></div>`;
        };
    };
};

window.onload = addNewImg(9, 9); 
// 1 - сколько загрузить най сайт
// 2 - сколько имеется картинок


//POST LOGIC 
//=============================================
const POST = document.querySelectorAll('.Post');

POST.forEach(item => {
    item.addEventListener("click", () => {
        location.href = `singlePost.html`;
    })
})