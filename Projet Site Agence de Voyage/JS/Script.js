TableauDesDestination = [["Paris", 1, "Reservation.html?id=1", "La ville lumière est souvent considérée comme l’une des plus belles villes au monde.Il faut reconnaître son charme certain qui déborde de culture, d’histoire et surtout, de vie. Au-delà de ses sites touristiques, elle regorge de secrets et de richesses. Elle se découvre et se redécouvre à tout moment de l’année: les cafés, le Louvre, la Tour Eiffel, le marais, le quartier latin ou Montmartre.", 85, "Temp", "False", "Images/Paris.png", true, false],
["Rome", 2, "Reservation.html?id=2", "Que vous partiez pour une semaine ou seulement un week-end, vous ne manquerez pas la place Saint Pierre de Rome et sa célèbre Basilique, véritable prouesse architecturale. Le Vatican est un passage obligé car c'est ici que vous pourrez admirer l'un des chefs d'œuvres majeurs de l'histoire de l'art, la Chapelle Sixtine, peintes par Michel-Ange, Le Pérugin et Botticelli ! Le Colisée ou la Villa Médicis sont d'autres lieux incontournables de la ville.", 95, "Temp", "False", "Images/Rome.png", true, false],
["Sydney", 3, "Reservation.html?id=3", "En rassemblant trois des emblèmes du pays, l’Harbour Bridge, l’Opera House et Bondi Beach, Sydney prend facilement des allures de capitale. Ville moderne et cosmopolite, Sydney est célèbre à travers le monde. Construite autour de l’une des plus belles baies du monde, la ville est dotée de nombreux atouts naturels tels que de magnifiques jardins publics, des îles de la baie et de rives préservées.", 100, "Temp", "True", "Images/Sydney.png", true, true],
["Wellington", 4, "Reservation.html?id=4", "La capitale de la Nouvelle-Zélande se situe sur le détroit de Cook, c'est à dire au Sud de l'île du Nord. Son environnement est propice aux sports en pleine nature comme le VTT, kayak, randonnée, etc... Ici, on aime le vin et les bonnes choses. La ville est paisible et abrite les bâtiments gouvernementaux ainsi que de nombreux musées. Prenez le funiculaire de Wellington pour avoir une vue panoramique de la ville sur la baie. Le soir, profitez de la vie nocturne très animée.", 95, "Temp", "False", "Images/Wellington.png", true, false],
["Safari", 5, "Reservation.html?id=5", "Des grandes étendues des Makgadikgadi Pans au dédale sans fin du delta de l’Okavango, de Chobe au Morémi, à toute heure et en toute saison, un safari au Botswana est l’assurance de rapporter, dans votre tête aussi bien que sur votre carte mémoire, toutes les images d’une nature chaque jour surprenante.", 110, "Temp", "True", "Images/Safari.png", true, false],
["Arctique", 6, "Reservation.html?id=6", "Partez en croisière Arctique à la découverte du Spitzberg, le rouyaume de l'ours blanc, et des icebergs géants duGroenland. Nous vous emmenons toujours dans les lieux les plus exceptionnels, notamment en Terre François-Joseph, Nouvelle-Zemble, et jusqu'à Wrangel!", 150, "Temp", "True", "Images/Nord.png", false, false]];
//Tableau des destination [nom,id,lien,description,prix,temperature,favoris,image,petitdej,animaux]

Identifiant = [["Administrateur", "123"],
["Administrateur2", "456"],
["Administrateur3", "789"]];
//Tableau des comptes [identifiant, mot de passe]

var prixA = 0;

function Formulaire() {     //Rempli le formulaire en fonction de l'id dans l'url -->Réservation.html
    var sejour_id = new URLSearchParams(window.location.search).get("id")
    var prix = TableauDesDestination[sejour_id - 1][4]
    desciption = TableauDesDestination[sejour_id - 1][3]
    nom = TableauDesDestination[sejour_id - 1][0]
    document.getElementById('nom').innerHTML = nom
    document.getElementById('description').innerHTML = desciption
    prixA = prix
    document.getElementById('id').value = TableauDesDestination[sejour_id - 1][1]

};

function CalculDuPrix() {           //Calcul le prix en fonction du formulaire rempli,l'affiche et le met dans le formulaire  --> Réservation 
    DA = new Date(document.getElementById('Date-d-arrivee').value).getTime()

    DD = new Date(document.getElementById('Date-de-depart').value).getTime()
    let nbjour =
        jour(DA, DD)
    let PrixParJour =
        CalculPrixParJour(document.getElementById('Nb-Adulte').value,
            document.getElementById('Nb-Enfant').value,
            document.getElementById('Petit-dejeunerO').checked)
    return (document.getElementById('resultat').innerHTML = (nbjour * PrixParJour), document.getElementById("prix").value = (nbjour * PrixParJour))
};

function jour(DateA, DateD) { // Calcul du temps de sejour --> CalculDuPrix()
    return ((DateD - DateA) / 86400000)
};

function CalculPrixParJour(NbA, NbE, Petitdej) {  //Calcul du prix par jour du sejour --> CalculDuPrix
    if (Petitdej) {
        let prixparA =
            NbA * (prixA + 12)
        let prixparE =
            NbE * (prixA * 0.4 + 12)

        return (prixparA + prixparE)
    }
    else {
        let prixparA =
            NbA * prixA
        let prixparE =
            NbE * prixA * 0.4
        return (prixparA + prixparE)
    }
};

//fonction qui créer un nouveau tableau avec les favoris --> index.html
function NouveauTableau() {
    TableauFavori = []
    for (index = 0; index < TableauDesDestination.length; index++) {
        if (TableauDesDestination[index][6] == "True") {
            TableauFavori.push(TableauDesDestination[index])
        }
    }
    return (TableauFavori)
};

//fonction qui rempli le tableau html à partir du tableau javascript des favoris --> index.html

function RemplissageFav() {
    var TableauFavoris = NouveauTableau()
    for (i = 0; i < TableauFavoris.length; i++) {
        var tableau = document.getElementById("favoris")
        var ligne = document.createElement("tr")
        tableau.appendChild(ligne)      //ajout des lignes
        for (j = 0; j < TableauFavoris[0].length; j++) {
            if (j == 1) {
                j++
                j++
            }
            if (j == 6) {
                j++
                var cellule = document.createElement("td")
                var lien = document.createElement("a")
                lien.href = TableauFavoris[i][2]
                var image = document.createElement("img")
                image.src = TableauFavoris[i][j]
                image.className = "PhotoDestination"
                lien.appendChild(document.createTextNode(TableauFavoris[i][0]))
                lien.appendChild(image)
                cellule.appendChild(lien)
                ligne.appendChild(cellule)

            }
            else {
                var cellule = document.createElement("td")
                cellule.appendChild(document.createTextNode(TableauFavoris[i][j]))
                ligne.appendChild(cellule)

            }


        }

    }
}

//fonction qui rempli le tableau html à partir du tableau javascript des destinations --> NosDestinations.html
function Remplissage() {
    for (i = 0; i < TableauDesDestination.length; i++) {
        var tableaua = document.getElementById("tableau")
        var lignea = document.createElement("tr")
        lignea.id = "ligne" + i
        tableaua.appendChild(lignea)    //ajout des lignes
        for (j = 0; j < TableauDesDestination[0].length; j++) {
            if (j == 1) {
                j++
                j++
            }
            if (j == 6) {
                j++
                var cellule = document.createElement("td")
                var lien = document.createElement("a")
                lien.href = TableauDesDestination[i][2]
                var image = document.createElement("img")
                image.src = TableauDesDestination[i][j]
                image.className = "PhotoDestination"
                lien.appendChild(document.createTextNode(TableauDesDestination[i][0]))
                lien.appendChild(image)
                cellule.appendChild(lien)
                lignea.appendChild(cellule)

            }
            else {
                var cellule = document.createElement("td")
                cellule.appendChild(document.createTextNode(TableauDesDestination[i][j]))
                lignea.appendChild(cellule)

            }


        }

    }
}
//fonction qui permet de retourner en haut de la page --> Toutes les pages html
function BoutonRetour() {
    window.onscroll = function (ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 50) ? "cVisible" : "cInvisible";
    };
};
function MapMonde() {
    //France
    var id = document.getElementById("MapMonde");
    var context = id.getContext("2d")
    var france = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    france.arc(435, 140, 13, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(france);
    context.closePath();
    context.stroke();

    //Italie
    var italie = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    italie.arc(455, 160, 12, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(italie);
    context.closePath();
    context.stroke();
    //Australie
    var australie = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    australie.arc(760, 360, 50, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(australie);
    context.closePath();
    context.stroke();
    //NouvelleZelande
    var NouvelleZelande = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    NouvelleZelande.arc(770, 300, 15, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(NouvelleZelande);
    context.closePath();
    context.stroke();
    //Safari
    var Safari = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    Safari.arc(485, 340, 15, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(Safari);
    context.closePath();
    context.stroke();
    //Artique
    var Arctique = new Path2D()
    context.strokeStyle = "#FFFFFF50";
    Arctique.arc(320, 65, 35, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF50";
    context.fill(Arctique);
    context.closePath();
    context.stroke();
}

function Identification() {
    for (i = 0; i < Identifiant.length; i++) {
        if (document.getElementById("Username").value == Identifiant[i][0]) {
            if (document.getElementById("Mdp").value == Identifiant[i][1]) {
                return (document.getElementById("Connexion").innerHTML = "Vous êtes connecté")
            }
            else {
                document.getElementById("Connexion").innerHTML = "Erreur d'identifiant ou de mot de passe"
            }
        }
        else {
            document.getElementById("Connexion").innerHTML = "Erreur d'identifiant ou de mot de passe"
        }
    }
}
function recapitulatif() {
    var prenom = new URLSearchParams(window.location.search).get("given-name")
    document.getElementById("prenom").innerHTML = prenom
    var nom = new URLSearchParams(window.location.search).get("family-name")
    document.getElementById("nom").innerHTML = nom
    var Da = new URLSearchParams(window.location.search).get("DA")
    document.getElementById("DateA").innerHTML = Da
    var Dd = new URLSearchParams(window.location.search).get("DD")
    document.getElementById("DateD").innerHTML = Dd
    var NbA = new URLSearchParams(window.location.search).get("NA")
    document.getElementById("NbA").innerHTML = NbA
    var NbE = new URLSearchParams(window.location.search).get("NE")
    document.getElementById("NbE").innerHTML = NbE
    var petitdej = new URLSearchParams(window.location.search).get("PetitDejeuner")
    document.getElementById("PetitDej").innerHTML = petitdej
    var prix = new URLSearchParams(window.location.search).get("prix")
    document.getElementById("prix").innerHTML = prix
    var num = Math.round(Math.random() * 999999999)
    document.getElementById("num").innerHTML = num
    var destination = new URLSearchParams(window.location.search).get("id")
    document.getElementById("destination").innerHTML = TableauDesDestination[destination - 1][0]
    document.getElementById("description").innerHTML = TableauDesDestination[destination - 1][3]
};

function filtre() {
    var prixmin = document.getElementById("prixmin").value
    var prixmax = document.getElementById("prixmax").value
    var PetitDej = document.getElementById("PetitDej")
    var Animaux = document.getElementById("Animaux")

    for (i = 0; i < TableauDesDestination.length; i++) {
        if (prixmax != "" && prixmin != "") {


            if (TableauDesDestination[i][4] > prixmax || TableauDesDestination[i][4] < prixmin) {
                var ligne = document.getElementById("ligne" + i)
                ligne.style = "display:none;"
            }
            if (TableauDesDestination[i][4] <= prixmax && TableauDesDestination[i][4] >= prixmin) {
                if (PetitDej.checked == true && TableauDesDestination[i][8] == true) {
                    if (Animaux.checked == true && TableauDesDestination[i][9] == true) {
                        var ligne = document.getElementById("ligne" + i)
                        ligne.style = "display:block;"
                    }
                    if (Animaux.checked == false && TableauDesDestination[i][9] == false) {
                        var ligne = document.getElementById("ligne" + i)
                        ligne.style = "display:block;"
                    }
                }
                if (PetitDej.checked == false && TableauDesDestination[i][8] == false) {
                    if (Animaux.checked == true && TableauDesDestination[i][9] == true) {
                        var ligne = document.getElementById("ligne" + i)
                        ligne.style = "display:block;"
                    }
                    if (Animaux.checked == false && TableauDesDestination[i][9] == false) {
                        var ligne = document.getElementById("ligne" + i)
                        ligne.style = "display:block;"
                    }
                }

            }

        }
        if (PetitDej.checked == true && TableauDesDestination[i][8] == false) {
            var ligne = document.getElementById("ligne" + i)
            ligne.style = "display:none;"
            console.log(PetitDej.checked)
        }
        if (PetitDej.checked == false && TableauDesDestination[i][8] == true) {
            var ligne = document.getElementById("ligne" + i)
            ligne.style = "display:none;"
        }
        if (Animaux.checked == true && TableauDesDestination[i][9] == false) {
            var ligne = document.getElementById("ligne" + i)
            ligne.style = "display:none;"
        }
        if (Animaux.checked == false && TableauDesDestination[i][9] == true) {
            var ligne = document.getElementById("ligne" + i)
            ligne.style = "display:none;"
        }
    };
};
