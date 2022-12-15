window.addEventListener("DOMContentLoaded", (event) => {
    /*page dessin*/
    let dessins = document.getElementsByClassName('dessins');
    let peintures = document.getElementsByClassName('peintures');
    let btn_dessin = document.getElementsByClassName('btn_dessin');
    let btn_peint = document.getElementsByClassName('btn_peint');

    
    peintures[0].style.display = "none";


    btn_dessin[0].addEventListener('mouseover', () => {
        if(getComputedStyle(dessins[0]).display != "grid"){
            dessins[0].style.display = "grid";
        }
        if(getComputedStyle(peintures[0]).display != "none"){
            peintures[0].style.display = "none";
        }
    });
    btn_peint[0].addEventListener('mouseover', () => {
        if(getComputedStyle(peintures[0]).display != "grid"){
            peintures[0].style.display = "grid";
        }
        if(getComputedStyle(dessins[0]).display != "none"){
            dessins[0].style.display = "none";
        }
    });

    btn_dessin[0].addEventListener('click', () => {
        if(getComputedStyle(dessins[0]).display != "grid"){
            dessins[0].style.display = "grid";
        }
        if(getComputedStyle(peintures[0]).display != "none"){
            peintures[0].style.display = "none";
        }
    });
    btn_peint[0].addEventListener('click', () => {
        if(getComputedStyle(peintures[0]).display != "grid"){
            peintures[0].style.display = "grid";
        }
        if(getComputedStyle(dessins[0]).display != "none"){
            dessins[0].style.display = "none";
        }
    });

    const slideDelay = 3000;

    const dynamicSlider = document.getElementById("slider");


    var curSlide = 0;
    window.setInterval(()=>{
        curSlide++;
        if (curSlide === dynamicSlider.childElementCount) {
            curSlide = 0;
        }

        // Actual slide
        dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
    }, slideDelay);

    const dynamicSlider_dessin = document.getElementById("slider_dessin");

    var curSlide_dessin = 0;
    window.setInterval(()=>{
        curSlide_dessin++;
        if (curSlide_dessin === dynamicSlider_dessin.childElementCount) {
            curSlide_dessin = 0;
        }

        // Actual slide
        dynamicSlider_dessin.firstElementChild.style.setProperty("margin-left", "-" + curSlide_dessin + "00%");
    }, slideDelay);
});