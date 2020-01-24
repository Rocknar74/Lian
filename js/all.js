
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

const CONTAINER_RESULT = document.querySelector('.search_menuResult');
const CONTAINER_RESULT_ACTIVE = 'search_menuResult-active';
const RESULT_ELEM = document.getElementsByClassName('resultSearch');

var searchARR = [ // массив с возможными результатами глобального поиска
    HOME = { 
        id: 'homeSearch',
        name: 'HOME',
        href: 'index.html',
    },
    ABOUT = { 
        id: 'aboutSearch',
        name: 'ABOUT',
        href: 'about.html',
    },
    PORTFOLIO = { 
        id: 'portfolioSearch',
        name: 'PORTFOLIO',
        href: 'portfolio.html',
    },
    BLOG = { 
        id: 'blogSearch',
        name: 'BLOG',
        href: 'blog.html',
    },
    CONTACT = { 
        id: 'contactSearch',
        name: 'CONTACT',
        href: 'contact.html',
    },
    PORTFOLIO_DETAILS = { 
        id: 'portfolioDetailsSearch',
        name: 'PORTFOLIO DETAILS',
        href: 'portfolio-details.html',
    },
    SINGLE_POST = { 
        id: 'singlePostSearch',
        name: 'SINGLE POST',
        href: 'singlePost.html',
    },
];

                    
let show = function() {
    if (CONTAINER_RESULT.innerHTML == '') { //если контейнер с элементами пуст - скрыть его
        CONTAINER_RESULT.classList.remove(CONTAINER_RESULT_ACTIVE);
    } else { //если в контейнер есть элементы - показать его
        CONTAINER_RESULT.classList.add(CONTAINER_RESULT_ACTIVE);
    };
};

let markString = function(item, text) { //функция маркерует совпадения имени эелемента и вводмого текста
    let textStart = item.name.search(text); //позиция старта маркировки
    return item.name.slice(0, textStart)
    + '<mark>' +
    item.name.slice(textStart, textStart + text.length)
    + '</mark>' +
    item.name.slice(textStart + text.length);
};
let check = function(item) {
    return Array.from(RESULT_ELEM).some(elem => { //проверка на совпадения
        return elem.id == item.id;
    });
};
SEARCH.oninput = function() {
    let text = this.value.trim().toUpperCase();
    if (text != '') {   //Если строка ввода не пустая то...
        searchARR.forEach(item => {
            if (item.name.search(text) != -1) { //Если вписываемая строк совпадает с подстрокой какого-либо элемента из массива searchARR, то...
                console.log(item.name.search(text));
                
                if (!check(item)) { //Если проверка на совпадения неудачна, то добавляем новый элемент в контейнер
                    CONTAINER_RESULT.innerHTML += `<li class="resultSearch" id="${item.id}"><a href="${item.href}">${text}</a></li>`;
                }
                RESULT_ELEM[item.id].firstChild.innerHTML = markString(item, text); // Маркерум текст
            } else {
                if (check(item)) { //Если элемент есть в контейнере, но больше не подходит - удаляем его из контейнера с элементами
                    RESULT_ELEM[item.id].remove();
                };
            };
        });
    } else { //Если строка ввода пустая то отчищаем контейнер от элементов
        CONTAINER_RESULT.innerHTML = '';
    };
    show();
};