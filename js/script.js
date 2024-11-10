window.addEventListener("DOMContentLoaded", (event) => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top:' + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add('expand');

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    })
    function toggleMenu() {
        let navbar = document.querySelector('.navbar');
        let burger = document.querySelector('.burger');
        burger.addEventListener('click', (e) => {
            navbar.classList.toggle('show-nav');
        });
    }

    toggleMenu();

});