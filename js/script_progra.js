window.addEventListener("DOMContentLoaded", (event) => {

    /*page graphisme*/
    let site_web = document.getElementsByClassName('mini_jeux');
    let divers = document.getElementsByClassName('divers');
    let btn_site = document.getElementsByClassName('btn_site');
    let btn_divers = document.getElementsByClassName('btn_divers');


    divers[0].style.display = "none";


    btn_site[0].addEventListener('mouseover', () => {
        if(getComputedStyle(site_web[0]).display != "grid"){
            site_web[0].style.display = "grid";
        }
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }
    });
    btn_divers[0].addEventListener('mouseover', () => {
        if(getComputedStyle(divers[0]).display != "grid"){
            divers[0].style.display = "grid";
        }
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }
    });

    btn_site[0].addEventListener('click', () => {
        if(getComputedStyle(site_web[0]).display != "grid"){
            site_web[0].style.display = "grid";
        }
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }
    });
    btn_divers[0].addEventListener('click', () => {
        if(getComputedStyle(divers[0]).display != "grid"){
            divers[0].style.display = "grid";
        }
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }
    });

 

});