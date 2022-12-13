window.addEventListener("DOMContentLoaded", (event) => {

    /*page graphisme*/
    let site_web = document.getElementsByClassName('mini_jeux');
    let divers = document.getElementsByClassName('divers');
    let btn_site = document.getElementsByClassName('btn_site');
    let btn_divers = document.getElementsByClassName('btn_divers');


    divers[0].style.display = "none";


    btn_site[0].addEventListener('mouseover', () => {
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }else{
            site_web[0].style.display = "grid";
        }
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }
    });
    btn_divers[0].addEventListener('mouseover', () => {
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }else{
            divers[0].style.display = "grid";
        }
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }
    });

    btn_site[0].addEventListener('click', () => {
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }else{
            site_web[0].style.display = "grid";
        }
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }
    });
    btn_divers[0].addEventListener('click', () => {
        if(getComputedStyle(divers[0]).display != "none"){
            divers[0].style.display = "none";
        }else{
            divers[0].style.display = "grid";
        }
        if(getComputedStyle(site_web[0]).display != "none"){
            site_web[0].style.display = "none";
        }
    });

    let svg = document.getElementsByClassName('colmar');
    let txt_svg = document.getElementsByClassName('txt_svg');

    txt_svg[0].style.display = "none";

    svg[0].addEventListener('mouseover', () => {
        if(getComputedStyle(txt_svg[0]).display != "grid"){
            txt_svg[0].style.display = "grid";
        }
    });
    svg[0].addEventListener('mouseout', () => {
        if(getComputedStyle(txt_svg[0]).display != "none"){
            txt_svg[0].style.display = "none";
        }
    });

    let creepys = document.getElementsByClassName('creepypasta');
    let txt_creepys = document.getElementsByClassName('txt_creepys');

    txt_creepys[0].style.display = "none";

    creepys[0].addEventListener('mouseover', () => {
        if(getComputedStyle(txt_creepys[0]).display != "grid"){
            txt_creepys[0].style.display = "grid";
        }
    });
    creepys[0].addEventListener('mouseout', () => {
        if(getComputedStyle(txt_creepys[0]).display != "none"){
            txt_creepys[0].style.display = "none";
        }
    });

    let portfolio = document.getElementsByClassName('portfolio');
    let txt_portfolio = document.getElementsByClassName('txt_webGL');

    txt_portfolio[0].style.display = "none";

    portfolio[0].addEventListener('mouseover', () => {
        if(getComputedStyle(txt_portfolio[0]).display != "grid"){
            txt_portfolio[0].style.display = "grid";
        }
    });
    portfolio[0].addEventListener('mouseout', () => {
        if(getComputedStyle(txt_portfolio[0]).display != "none"){
            txt_portfolio[0].style.display = "none";
        }
    });

});