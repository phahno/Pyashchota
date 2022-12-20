const headerElement = document.querySelector('.header');

const callback = function(entries, observer) {
    if (entries[0].isIntersecting) {
        headerElement.classList.remove('_scroll');
    } else {
        headerElement.classList.add('_scroll')
    }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);


const headers = document.querySelectorAll("[data-name='spoiler-title']");
headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
});
function headerClick() {
    this.nextElementSibling.classList.toggle("spoiler-body");
}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__list');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
});
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
});
function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}}