TableauDesDestination = [["Paris",1,"Reservation.html?id=1","Voici la description pour Paris",85,"Temp","False","Images/Paris.png"],
["Rome",2,"Reservation.html?id=2","Voici la description pour Rome",95,"Temp","False","Images/Rome.png"],
["Sydney",3,"Reservation.html?id=3","Voici la description pour Sydney",100,"Temp","True","Images/Sydney.png"],
["Wellington",4,"Reservation.html?id=4","Voici la description pour Paris",95,"Temp","False","Images/Wellington.png"],
["Safari",5,"Reservation.html?id=5","Voici la description pour un Safari",110,"Temp","True","Images/Safari.png"],
["Arctique",6,"Reservation.html?id=6","Voici la description pour un voyage vers l'Arctique",150,"Temp","True","Images/Nord.png"]];

var prixA = 0;

window.onload = function Formulaire(){
    var sejour_id = new URLSearchParams(window.location.search).get("id")
    var prix = TableauDesDestination[sejour_id-1][4]
    desciption = TableauDesDestination[sejour_id-1][3]
    nom= TableauDesDestination[sejour_id-1][0]
    document.getElementById('nom').innerHTML = nom 
    document.getElementById('description').innerHTML = desciption
    prixA = prix
} ;

console.log(prixA);
function CalculDuPrix() {
    DA = new Date(document.getElementById('Date-d-arrivee').value).getTime()

    DD = new Date(document.getElementById('Date-de-depart').value).getTime()
    let nbjour =
        jour(DA, DD)
    let PrixParJour =
        CalculPrixParJour(document.getElementById('Nb-Adulte').value,
            document.getElementById('Nb-Enfant').value,
            document.getElementById('Petit-dejeunerO').checked)
    return (document.getElementById('resultat').innerHTML = (nbjour * PrixParJour))
};

function jour(DateA, DateD) {
    return ((DateD - DateA) / 86400000)
};

function CalculPrixParJour(NbA, NbE, Petitdej) {
    console.log(prixA)
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
            NbE * prixA*0.4
        console.log(prixparA)
        return (prixparA + prixparE)
    }
};

//fonction qui créer un nouveau tableau avec les favoris
function NouveauTableau () {
    TableauFavori = []
    for (index = 0; index < TableauDesDestination.length; index++){
        if (TableauDesDestination[index][6] == "True") {
            TableauFavori.push(TableauDesDestination[index])
        } 
    }
    return(TableauFavori)
};

//Création de la fonction de remplissage home

/*window.onload = function RemplissageFav(){
    var TableauFavoris = NouveauTableau()
    for (i = 0; i< TableauFavoris.length ; i++){
        var tableau = document.getElementById("favoris")
        var ligne = document.createElement("tr")
        tableau.appendChild(ligne)      //ajout des lignes
        for (j = 0; j<TableauFavoris[0].length ;j++){
            if (j == 1){
                j++
                j++
            }
            if (j == 6){
                j++
                var cellule = document.createElement("td")
                var lien = document.createElement("a")
                lien.href=TableauFavoris[i][2]
                var image =document.createElement("img")
                image.src =TableauFavoris[i][j]
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

function Remplissage(){
    for (i = 0; i< TableauDesDestination.length ; i++){
        var tableau = document.getElementById("")
        var ligne = document.createElement("tr")
        tableau.appendChild(ligne)      //ajout des lignes
        for (j = 0; j<TableauDesDestination[0].length ;j++){
            if (j == 1){
                j++
                j++
            }
            if (j == 6){
                j++
                var cellule = document.createElement("td")
                var lien = document.createElement("a")
                lien.href=TableauDesDestination[i][2]
                var image =document.createElement("img")
                image.src =TableauDesDestination[i][j]
                lien.appendChild(document.createTextNode(TableauDesDestination[i][0]))
                lien.appendChild(image)
                cellule.appendChild(lien)
                ligne.appendChild(cellule)

            }
            else {
                var cellule = document.createElement("td")
                cellule.appendChild(document.createTextNode(TableauDesDestination[i][j]))
                ligne.appendChild(cellule)

            }


        }

    }
}
*/
function BoutonRetour() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 50) ? "cVisible" : "cInvisible";
    };
};