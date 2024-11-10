window.addEventListener("DOMContentLoaded", (event) => {

    function toggleMenu() {
        let navbar = document.querySelector('.navbar');
        let burger = document.querySelector('.burger');
        burger.addEventListener('click', (e) => {
            navbar.classList.toggle('show-nav');
        });
    }

    toggleMenu();

});