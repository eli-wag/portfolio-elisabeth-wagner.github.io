window.addEventListener("DOMContentLoaded", (event) => {
    
    let tps = document.getElementsByClassName('tps');
    let meca = document.getElementsByClassName('meca');
    let btn_tp = document.getElementsByClassName('btn_tp');
    let btn_meca = document.getElementsByClassName('btn_meca');

    
    meca[0].style.display = "none";
    btn_tp[0].style.backgroundColor = "#DDA0DD";


    btn_tp[0].addEventListener('mouseover', () => {
        if(getComputedStyle(tps[0]).display != "grid"){
            tps[0].style.display = "grid";
            btn_tp[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(meca[0]).display != "none"){
            meca[0].style.display = "none";
            btn_meca[0].style.backgroundColor = "#D3D3D3";
        }
    });
    btn_meca[0].addEventListener('mouseover', () => {
        if(getComputedStyle(meca[0]).display != "grid"){
            meca[0].style.display = "grid";
            btn_meca[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(tps[0]).display != "none"){
            tps[0].style.display = "none";
            btn_tp[0].style.backgroundColor = "#D3D3D3";
        }
    });

    btn_tp[0].addEventListener('click', () => {
        if(getComputedStyle(tps[0]).display != "grid"){
          tps[0].style.display = "grid";
          btn_tp[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(meca[0]).display != "none"){
            meca[0].style.display = "none";
            btn_meca[0].style.backgroundColor = "#D3D3D3";
        }
    });
    btn_meca[0].addEventListener('click', () => {
        if(getComputedStyle(meca[0]).display != "grid"){
            meca[0].style.display = "grid";
            btn_meca[0].style.backgroundColor = "#DDA0DD";
        }
        if(getComputedStyle(tps[0]).display != "none"){
            tps[0].style.display = "none";
            btn_tp[0].style.backgroundColor = "#D3D3D3";
        }
    });

});