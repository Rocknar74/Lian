

// SIDEBAR - POPULAR TAGS LOGIC
//==================================================
const CONTAINER_TAGS = document.querySelector('.containerTags');
var arrTags = [ 
    "construction",
    "engineering",
    "architecture",
    "structural design",
    "civil engineer",
    "industrial",
    "managment",
    "mechanical",
];

arrTags.forEach(item => {
    CONTAINER_TAGS.innerHTML += `<p class="personal__containerTag">${item}</p>`;
})
const PERSONAL_CONTAINERS_TAGS = document.querySelectorAll('.personal__containerTag');
const PERSONAL_CONTAINERS_TAGS_ACTIVE = 'tag-active'

function clean_items (obj, newClassObj, thisObj) {
    if (thisObj.classList.contains(newClassObj)){
        thisObj.classList.remove(newClassObj);
    } else {
        add_items(obj, newClassObj, thisObj);
    };
};
function add_items (obj, newClassObj, thisObj) {
    obj.forEach(item => {
        item.classList.remove(newClassObj);
    });
    thisObj.classList.add(newClassObj);
}

PERSONAL_CONTAINERS_TAGS.forEach(item => {
    item.addEventListener("click", () => {
        clean_items(PERSONAL_CONTAINERS_TAGS, PERSONAL_CONTAINERS_TAGS_ACTIVE, item)
    })
})


// SIDEBAR - INSTAGRAM LOGIC
const CONT_INSTAGRAM = document.querySelector('.container__instagramImg');

function addNewImg(totalImg_site, totalImg_folder) {
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