document.addEventListener('DOMContentLoaded', function() {
    let saisie = document.getElementById('letter');
    let devine = document.getElementsByClassName("devine");
    let btn = document.getElementsByClassName('btn');
    let perdu = document.getElementsByClassName('perdu');
    let gagne = document.getElementsByClassName('gagne');
    let dessin = document.getElementsByClassName('ligne');
    let faux = document.getElementsByClassName('faux');
    let mort = document.getElementById('div1');
   
    
    for(let n=0; n<dessin.length; n++){
        dessin[n].style.display="none";
    }
    gagne[0].style.display = "none";
    perdu[0].style.display = "none";

    let tab = ["javascript", "candidat", "graphisme", "videos", "programmation","jeux","visuel", "art","decouvrir","dessin","peinture","projet","illustrator","audiovisuel","pendu"];
    let rand = Math.floor(Math.random()*tab.length);
    let reponse = tab[rand].toUpperCase();
    let compteur = 0;
    let compteur_bon = 0;
    let nb_lettres = reponse.length;
    let tab_rep_juste = [];
    console.log(reponse);

    var container = document.createElement("div");
    container.setAttribute('id','container');
    for(let j=0; j<reponse.length; j++){
        var grandDiv = document.createElement("div");
        grandDiv.classList.add('grandDiv');
        container.appendChild(grandDiv); 
        var newDiv = document.createElement("div"); 
        newDiv.classList.add(reponse[j]);
        grandDiv.appendChild(newDiv);
        var newContent = document.createTextNode(reponse[j]);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById('div1');
        document.body.insertBefore(container, currentDiv);
        newDiv.style.visibility = "hidden";
    }

    let premiere = document.getElementsByClassName(reponse[0]);
    premiere[0].style.visibility = "visible";

    
    btn[0].addEventListener('click', controle);
    
    


    function controle() {

        if (saisie.value == '') {
            console.log("nul");
        } else {

            var choix = saisie.value.toUpperCase();

            console.log(compteur_bon);
            console.log(nb_lettres);

            if (compteur_bon == nb_lettres - 1) {
                for (let n = 0; n < dessin.length; n++) {
                    dessin[n].style.display = "none";
                }
                devine[0].style.display = "none";
                container.style.display = "none";
                faux[0].style.display = "none";
                gagne[0].style.display = "block";

            }

            for (let j = 0; j < reponse.length; j++) {

                let truc = document.getElementsByClassName(reponse[j]);

                if (reponse[j] == choix) {
                    truc[0].style.visibility = "visible";
                    if (truc[1]) {
                        truc[1].style.visibility = "visible";
                    }
                    if (truc[2]) {
                        truc[2].style.visibility = "visible";
                    }
                    if (truc[3]) {
                        truc[3].style.visibility = "visible";
                    }
                    compteur_bon = compteur_bon + 1;
                    tab_rep_juste.push(choix);
                    console.log(tab_rep_juste);
                    return true
                }

            }


            for (let i = 0; i < reponse.length; i++) {
                if (compteur == (dessin.length) - 1) {
                    mort.style.display = "none";
                    devine[0].style.display = "none";
                    container.style.display = "none";
                    faux[0].style.display = "none";
                    perdu[0].style.display = "block";
                }
                if (reponse[i] !== choix) {
                    dessin[compteur].style.display = "block";
                    compteur = compteur + 1;
                    faux[0].innerHTML += " " + choix;
                    return false
                }
            }

        }
    
    }

    
    /*Rafraichissement page : window.location.reload()*/    
      
      
});

