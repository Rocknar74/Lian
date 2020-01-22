
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
// var RESULT_ELEM = document.querySelectorAll('.search_menuResult li');
var RESULT_ELEM = document.getElementsByClassName('resultSearch');

var searchARR = [
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
        name: 'PORTFOLIO-DETAILS',
        href: 'portfolio-details.html',
    },
    SINGLE_POST = { 
        id: 'singlePostSearch',
        name: 'SINGLE-POST',
        href: 'singlePost.html',
    },
]

SEARCH.oninput = function() {
    let text = this.value.trimLeft().toUpperCase();
    let check = false;
    let modifString = function(item, text) {
        console.log(item.name.length);
        
        return item.name.slice(0, item.name.search(text))
        + '<mark>' +
        item.name.slice(item.name.search(text), item.name.search(text) + text.length)
        + '</mark>' +
        item.name.slice(item.name.search(text) + text.length);
    };
    if (text != '') {   //Если строка ввода не пустая то...
        searchARR.forEach(item => {
            if (item.name.search(text) != -1) { //Если вписываемая строк совпадает с подстрокой какого-либо элемента из массива searchARR, то...
                check = Array.from(RESULT_ELEM).some(elem => { //проверка на совпадения
                    return elem.id == item.id;
                });
                if (!check) { //Если проверка на совпадения неудачна, то добавляем новый элемент в контейнер
                    CONTAINER_RESULT.innerHTML += `<li class="resultSearch" id="${item.id}"><a href="${item.href}">${modifString(item, text)}</a></li>`;
                } else {
                    
                    Array.from(RESULT_ELEM).forEach(elem => {
                        if (elem.id == item.id) {
                            elem.firstChild.innerHTML = modifString(item, text);
                            return;
                        };
                    });
                };
            } else {
                Array.from(RESULT_ELEM).forEach(elem => { //если элемент уже не подходит - удаляем его из контейнера с элементами
                    if (elem.id == item.id) {
                        elem.remove();
                        return;
                    };
                });
            };
        });
    } else { //Если строка ввода пустая то отчищаем контейнер от элементов
        CONTAINER_RESULT.innerHTML = '';
    };
};