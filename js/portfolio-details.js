
// ICON SOCIAL LOGIC
//==============================================
const SHARE_BUTTON = document.querySelector(".shareButton");
const SHARE_ICON = document.querySelector(".share-iconSocial");
const SHARE_ICON_ACTIVE = 'share-iconSocial-active';

SHARE_BUTTON.addEventListener("click", () => {
    if (SHARE_ICON.classList.contains(SHARE_ICON_ACTIVE)) {
        SHARE_ICON.classList.remove(SHARE_ICON_ACTIVE);
    } else {
        SHARE_ICON.classList.add(SHARE_ICON_ACTIVE);
    };
});


// SLIDER PICTURE LOGIC
//============================================
const SLIDER_RADIO = document.querySelectorAll(".sradioAuthorBlock");
const SLIDER_LABEL = document.querySelectorAll('.sliderLabel');
const SLIDER_PICTURE = document.querySelectorAll('.pictureSlider');
// const SLIDER_PICTURE = document.querySelectorAll('img');
const FOCUS_LABEL = document.querySelector(".focusImg");

window.onload = function() {
    FOCUS_LABEL.innerHTML = SLIDER_PICTURE[0].parentElement.innerHTML;
};

SLIDER_PICTURE.forEach(item => {
    item.addEventListener("click", () => {
            FOCUS_LABEL.innerHTML = item.parentElement.innerHTML;
            console.log(1);
    });
});
