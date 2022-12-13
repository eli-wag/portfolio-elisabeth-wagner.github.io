from tkinter import *
from random import randint, shuffle

#définition des variables globales
images = []
cartes = []
cartes_jouees = []
nb_lignes, nb_colonnes = 4, 4
score = 0
fini = False

#chargement des images
def charger_images():
    del images[:]
    nb_images = 9  #0.gif = dos de la carte
    choixCartes = []
    choixCartes.append(0)
    i=0
    while i < nb_images-1:
        x = randint(1, nb_images-1)
        if x not in choixCartes:
            choixCartes.append(x)
            i += 1
    for i in range(nb_images):
        nom = 'images/'+str(choixCartes[i]) + '.gif' #chercher les images dans le dossier 'images'
        image = PhotoImage(file = nom)
        images.append(image)


# melanger les cartes
def melanger_cartes():
    global nb_colonnes, nb_lignes, cartes
    nb_cartes = nb_colonnes * nb_lignes
    cartes=list(range(1,nb_cartes//2+1))*2
    shuffle(cartes)


# Selection des 2 cartes OK
def gerer_tirage():
    global nb_colonnes, nb_lignes, cartes_jouees, score
    global fini
    if len(cartes_jouees) > 1:
        if cartes[cartes_jouees[0]-1] == cartes[cartes_jouees[1]-1]:
            # enlève les cartes identiques
            canvas.delete(cartes_jouees[0])
            canvas.delete(cartes_jouees[1])
            score += 1
        else:
            # retourne les cartes différentes
            canvas.itemconfig(cartes_jouees[0], image = images[0])
            canvas.itemconfig(cartes_jouees[1], image = images[0])
        cartes_jouees = []
        calcul_p = str(score*2)
        text1 = 'Score : ' + calcul_p
        points_joueur1.config(text = text1)
        points_joueur1.config(bg = 'red')
        if score == (nb_colonnes*nb_lignes)//2:
            fini=True
            texte = "Victoire !!! PD"
            canvas.create_rectangle(0,0,(110*nb_colonnes)+20,(110*nb_lignes)+20,
                                    fill='white')
            canvas.create_text((55*nb_colonnes)+10,(55*nb_lignes)+10,
                               text=texte,font='Verdana 24',fill='black')

# On retourne onclick
def cliquer_carte(event):
    global fini, plateau, cartes_jouees
    if len(cartes_jouees) < 2:
        carteSel = canvas.find_closest(event.x, event.y)
        carteID = carteSel[0]
        if fini:
            fini = False
            reinit()
        else:
            canvas.itemconfig(carteID, image = images[cartes[carteID-1]]) # retourner
            if len(cartes_jouees) == 0:
                cartes_jouees.append(carteID)    # enregistre dans le tableau
            elif carteID != cartes_jouees[0]:
                cartes_jouees.append(carteID)
    if len(cartes_jouees) == 2:
        plateau.after(1500,gerer_tirage)



# menu nouvelle partie / quitter
def creer_menus(fen):
    top = Menu(fen)
    fen.config(menu=top)

    jeu = Menu(top, tearoff=False)
    top.add_cascade(label='Menu', menu=jeu)
    jeu.add_command(label='Nouvelle partie', command=reinit)
    jeu.add_command(label='Quitter', command=fen.destroy)


# Global canvas
def creer_canevas(fen, col, lig):
    return Canvas(fen, width=(110*col)+10, height=(110*lig)+10, bg='white')


# Redémarrer une partie
def reinit():
    global canvas, score, nb_lignes, nb_colonnes
    score = 0
    del cartes[:]
    del cartes_jouees[:]
    canvas.destroy()
    canvas = creer_canevas(plateau, nb_colonnes, nb_lignes)
    canvas.pack(side = TOP, padx = 5, pady = 5)
    canvas.bind("<Button-1>", cliquer_carte)    # permet le clic sur les cartes
    melanger_cartes()
    for i in range(nb_colonnes):                # dessin des cartes retournées
        for j in range(nb_lignes):
            canvas.create_image((110*i)+60, (110*j)+60, image=images[0])
    calcul_p = str(score*2)
    text1 = 'Score : ' + calcul_p
    points_joueur1.config(text = text1, bg = 'red')


# Lancement
fenetre = Tk()
fenetre.title("Jeu Memory Python")
creer_menus(fenetre)
plateau = Frame(fenetre)
plateau.pack()
canvas=creer_canevas(plateau, nb_colonnes, nb_lignes)
canvas.pack(side = TOP, padx = 2, pady = 2)
points_joueur1 = Label(fenetre, text = "Score : 0",
                       bg="red", font="Verdana 16")
points_joueur1.pack(pady = 2, side = LEFT)
charger_images()
melanger_cartes()
for i in range(nb_colonnes):                # dessin des cartes 0.gif
    for j in range(nb_lignes):
        canvas.create_image((110*i)+60, (110*j)+60, image = images[0])
canvas.bind("<Button-1>", cliquer_carte)    # clique sur les cartes
fenetre.mainloop()
