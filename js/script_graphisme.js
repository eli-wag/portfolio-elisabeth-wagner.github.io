window.addEventListener("DOMContentLoaded", (event) => {

    /*page graphisme*/
    let trav_univ = document.getElementsByClassName('travaux-univ');
    let trav_perso = document.getElementsByClassName('travaux-perso');
    let btn_univ = document.getElementsByClassName('btn_univ');
    let btn_perso = document.getElementsByClassName('btn_perso');

    
    trav_perso[0].style.display = "none";
    btn_univ[0].style.backgroundColor = "#DDA0DD";


    btn_univ[0].addEventListener('mouseover', () => {
        if(getComputedStyle(trav_univ[0]).display != "none"){
            trav_univ[0].style.display = "none";
            btn_univ[0].style.backgroundColor = "#D3D3D3";
        }else{
            trav_univ[0].style.display = "grid";
            btn_univ[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(trav_perso[0]).display != "none"){
            trav_perso[0].style.display = "none";
            btn_perso[0].style.backgroundColor = "#D3D3D3";
        }
    });
    btn_perso[0].addEventListener('mouseover', () => {
        if(getComputedStyle(trav_perso[0]).display != "none"){
            trav_perso[0].style.display = "none";
            btn_perso[0].style.backgroundColor = "#D3D3D3";
        }else{
            trav_perso[0].style.display = "grid";
            btn_perso[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(trav_univ[0]).display != "none"){
            trav_univ[0].style.display = "none";
            btn_univ[0].style.backgroundColor = "#D3D3D3";
        }
    });

    btn_univ[0].addEventListener('click', () => {
        if(getComputedStyle(trav_univ[0]).display != "grid"){
            trav_univ[0].style.display = "grid";
            btn_univ[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(trav_perso[0]).display != "none"){
            trav_perso[0].style.display = "none";
            btn_perso[0].style.backgroundColor = "#D3D3D3";
        }
    });
    btn_perso[0].addEventListener('click', () => {
        if(getComputedStyle(trav_perso[0]).display != "grid"){
            trav_perso[0].style.display = "grid";
            btn_perso[0].style.backgroundColor = "#DDA0DD";
        }

        if(getComputedStyle(trav_univ[0]).display != "none"){
            trav_univ[0].style.display = "none";
            btn_univ[0].style.backgroundColor = "#D3D3D3";
        }
    });
});