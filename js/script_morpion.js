document.addEventListener('DOMContentLoaded', function() {
    let cercle = document.getElementsByClassName("cercle");
    let croix = document.getElementsByClassName("croix");
    let element = document.getElementsByClassName("case");
    let svg = document.getElementsByClassName("svg");
    let grille = document.getElementsByClassName("grille");
    let gagne = document.getElementsByClassName("gagne");
    let perdu = document.getElementsByClassName("perdu");


    gagne[0].style.display = "none";
    perdu[0].style.display = "none";

    let rond_0 = document.getElementById("rond_0" );
    let rond_1 = document.getElementById("rond_1" );
    let rond_2 = document.getElementById("rond_2" );
    let rond_3 = document.getElementById("rond_3" );
    let rond_4 = document.getElementById("rond_4" );
    let rond_5 = document.getElementById("rond_5" );
    let rond_6 = document.getElementById("rond_6" );
    let rond_7 = document.getElementById("rond_7" );
    let rond_8 = document.getElementById("rond_8");


    let ligne_0 = document.getElementById("ligne_0");
    let ligne_1 = document.getElementById("ligne_1");
    let ligne_2 = document.getElementById("ligne_2");
    let ligne_3 = document.getElementById("ligne_3");
    let ligne_4 = document.getElementById("ligne_4");
    let ligne_5 = document.getElementById("ligne_5");
    let ligne_6 = document.getElementById("ligne_6");
    let ligne_7 = document.getElementById("ligne_7");
    let ligne_8 = document.getElementById("ligne_8");
    let ligne_9 = document.getElementById("ligne_9");
    let ligne_10 = document.getElementById("ligne_10");
    let ligne_11 = document.getElementById("ligne_11");
    let ligne_12 = document.getElementById("ligne_12");
    let ligne_13 = document.getElementById("ligne_13");
    let ligne_14 = document.getElementById("ligne_14");
    let ligne_15 = document.getElementById("ligne_15");
    let ligne_16 = document.getElementById("ligne_16");
    let ligne_17 = document.getElementById("ligne_17");

    let jeu = ["element[0]", "element[1]", "element[2]", "element[3]", "element[4]", "element[5]", "element[6]", "element[7]", "element[8]"];
    let compteur = 0;

    let case_0 = 0;
    let case_1 = 0;
    let case_2 = 0;
    let case_3 = 0;
    let case_4 = 0;
    let case_5 = 0;
    let case_6 = 0;
    let case_7 = 0;
    let case_8 = 0;
    

    element[0].addEventListener('click', affichage_zero);
    element[1].addEventListener('click', affichage_un);
    element[2].addEventListener('click', affichage_deux);
    element[3].addEventListener('click', affichage_trois);
    element[4].addEventListener('click', affichage_quatre);
    element[5].addEventListener('click', affichage_cinq);
    element[6].addEventListener('click', affichage_six);
    element[7].addEventListener('click', affichage_sept);
    element[8].addEventListener('click', affichage_huit);
    
    

    function match_nul() {
        if (case_0 + case_1 + case_2 + case_3 + case_4 + case_5 + case_6 + case_7 + case_8 == 9) {
            window.location.reload();
        }
    }

    setInterval(match_nul, 1000);



    function affichage_zero() {

        if (case_0 == 0) {

            compteur = compteur + 1;

            if (compteur % 2 !== 0) {
                croix[0].style.display = "block";
                croix[1].style.display = "block";
            }
            if (compteur % 2 == 0) {
                cercle[0].style.display = "block";
            }
            case_0 = 1;
        }

        // 0, 1, 2
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[2].style.display == "block" && 
            croix[3].style.display == "block" && 
            croix[4].style.display == "block" && 
            croix[5].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        // 0, 3, 6
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[3].style.display == "block" && 
            cercle[6].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        // 0, 4, 8
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[0]");


    }



    function affichage_un() {
        compteur = compteur + 1;

        if (case_1 == 0) {

            if (compteur % 2 !== 0) {
                croix[2].style.display = "block";
                croix[3].style.display = "block";
                /*svg[1].removeChild(rond_1);*/
            }
            if (compteur % 2 == 0) {
                cercle[1].style.display = "block";
                /*svg[1].removeChild(ligne_2);
                svg[1].removeChild(ligne_3);*/
            }
            case_1 = 1;
        }


        // 0, 1, 2
        if (
            croix[0].style.display == "block" &&
            croix[1].style.display == "block" && 
            croix[2].style.display == "block" && 
            croix[3].style.display == "block" && 
            croix[4].style.display == "block" && 
            croix[5].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        // 1, 4, 7
        if (
            croix[2].style.display == "block" &&
            croix[3].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[7].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[1]");
    }


    function affichage_deux() {

        compteur = compteur + 1;

        if (case_2 == 0) {
            if (compteur % 2 !== 0) {
                croix[4].style.display = "block";
                croix[5].style.display = "block";
                /*svg[2].removeChild(rond_2);*/
            }
            if (compteur % 2 == 0) {
                cercle[2].style.display = "block";
                /*svg[2].removeChild(ligne_4);
                svg[2].removeChild(ligne_5);*/
            }
            case_2 = 1;
        }

     
        // 0, 1, 2
        if (
            croix[0].style.display == "block" &&
            croix[1].style.display == "block" && 
            croix[2].style.display == "block" && 
            croix[3].style.display == "block" && 
            croix[4].style.display == "block" && 
            croix[5].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //2, 4, 6
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[6].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //2, 5, 8
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[5].style.display == "block" && 
            cercle[8].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[2]");
    }


    function affichage_trois(){

        compteur = compteur + 1;

        if (case_3 == 0) {
            if (compteur % 2 !== 0) {
                croix[6].style.display = "block";
                croix[7].style.display = "block";
                /*svg[3].removeChild(rond_3);*/
            }
            if (compteur % 2 == 0) {
                cercle[3].style.display = "block";
                /*svg[3].removeChild(ligne_6);
                svg[3].removeChild(ligne_7);*/
            }
            case_3 = 1;
        }


        // 0, 3, 6
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[3].style.display == "block" && 
            cercle[6].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //3, 4, 5
        if (
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[3].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[5].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[3]");
    }

    function affichage_quatre(){
       
        compteur = compteur + 1;

        if (case_4 == 0) {
            if (compteur % 2 !== 0) {
                croix[8].style.display = "block";
                croix[9].style.display = "block";
                /*svg[4].removeChild(rond_4);*/
            }
            if (compteur % 2 == 0) {
                cercle[4].style.display = "block";
                /*svg[4].removeChild(ligne_8);
                svg[4].removeChild(ligne_9)*/
            }
            case_4 = 1;
        }


        // 0, 4, 8
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        // 1, 4, 7
        if (
            croix[2].style.display == "block" &&
            croix[3].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[7].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //2, 4, 6
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[6].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //3, 4, 5
        if (
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[3].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[5].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[4]");
    }

    function affichage_cinq(){
        
        compteur = compteur + 1;

        if (case_5 == 0) {
            if (compteur % 2 !== 0) {
                croix[10].style.display = "block";
                croix[11].style.display = "block";
                /*svg[5].removeChild(rond_5);*/
            }
            if (compteur % 2 == 0) {
                cercle[5].style.display = "block";
                /*svg[5].removeChild(ligne_10);
                svg[5].removeChild(ligne_11);*/
            }
            case_5 = 1;
        }


        //2, 5, 8
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[5].style.display == "block" && 
            cercle[8].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //3, 4, 5
        if (
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[3].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[5].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[5]");

    }

    function affichage_six(){
        
        compteur = compteur + 1;

        if (case_6 == 0) {

            if (compteur % 2 !== 0) {
                croix[12].style.display = "block";
                croix[13].style.display = "block";
                /*svg[6].removeChild(rond_6);*/
            }
            if (compteur % 2 == 0) {
                cercle[6].style.display = "block";
                /*svg[6].removeChild(ligne_12);
                svg[6].removeChild(ligne_13);*/
            }
            case_6 = 1;
        }

        // 0, 3, 6
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[6].style.display == "block" && 
            croix[7].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[3].style.display == "block" && 
            cercle[6].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //2, 4, 6
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[12].style.display == "block" && 
            croix[13].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[6].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //6, 7, 8
        if (
            croix[12].style.display == "block" &&
            croix[13].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[6].style.display == "block" && 
            cercle[7].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[6]");
    }

    function affichage_sept(){ 
        
        compteur = compteur + 1;

        if (case_7 == 0) {
            if (compteur % 2 !== 0) {
                croix[14].style.display = "block";
                croix[15].style.display = "block";
                /*svg[7].removeChild(rond_7);*/
            }
            if (compteur % 2 == 0) {
                cercle[7].style.display = "block";
                /*svg[7].removeChild(ligne_14);
                svg[7].removeChild(ligne_15);*/
            }
            case_7 = 1;
        }


        // 1, 4, 7
        if (
            croix[2].style.display == "block" &&
            croix[3].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[4].style.display == "block" && 
            cercle[1].style.display == "block" && 
            cercle[7].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        
        //6, 7, 8
        if (
            croix[12].style.display == "block" &&
            croix[13].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[6].style.display == "block" && 
            cercle[7].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[7]");
    }

    function affichage_huit(){ 
       
        compteur = compteur + 1;

        if (case_8 == 0) {
            if (compteur % 2 !== 0) {
                croix[16].style.display = "block";
                croix[17].style.display = "block";
                /*svg[8].removeChild(rond_8);*/
            }
            if (compteur % 2 == 0) {
                cercle[8].style.display = "block";
                /*svg[8].removeChild(ligne_16);
                svg[8].removeChild(ligne_17);*/
            }
            case_8 = 1;
        }



        // 0, 4, 8
        if (
            croix[0].style.display == "block" && 
            croix[1].style.display == "block" && 
            croix[8].style.display == "block" && 
            croix[9].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[0].style.display == "block" && 
            cercle[4].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        
        //2, 5, 8
        if (
            croix[4].style.display == "block" &&
            croix[5].style.display == "block" && 
            croix[10].style.display == "block" && 
            croix[11].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[5].style.display == "block" && 
            cercle[8].style.display == "block" && 
            cercle[2].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }

        //6, 7, 8
        if (
            croix[12].style.display == "block" &&
            croix[13].style.display == "block" && 
            croix[14].style.display == "block" && 
            croix[15].style.display == "block" && 
            croix[16].style.display == "block" && 
            croix[17].style.display == "block"
            ){
                grille[0].style.display = "none";
                gagne[0].style.display = "block";
        }

        if (
            cercle[6].style.display == "block" && 
            cercle[7].style.display == "block" && 
            cercle[8].style.display == "block" 
            ){
                grille[0].style.display = "none";
                perdu[0].style.display = "block";
        }
        jeu = jeu.filter((jeu) => jeu !== "element[8]");
    }

    

});

