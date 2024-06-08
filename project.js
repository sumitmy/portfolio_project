document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var header = document.querySelector('header');

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('scroll', function () {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    });

    window.addEventListener('load', function () {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    });
});
