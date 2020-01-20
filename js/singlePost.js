
const LIKE_POST = document.getElementById('like_1');
const LIKE_ICON = document.querySelector('.iconLike');

LIKE_POST.addEventListener("click", () => {
    if (LIKE_POST.checked) {
        LIKE_ICON.innerHTML = "";
    } else {
        LIKE_ICON.innerHTML = "";
    }
})