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
}

function jour(DateA, DateD) {
    return ((DD - DA) / 86400000)
}

function CalculPrixParJour(NbA, NbE, Petitdej) {
    console.log(Petitdej)
    if (Petitdej) {
        let prixparA =
            NbA * 90
        let prixparE =
            NbE * 70

        return (prixparA + prixparE)
    }
    else {
        let prixparA =
            NbA * 85
        let prixparE =
            NbE * 65
        console.log(prixparA)
        return (prixparA + prixparE)
    }
};

TableauDesDestination = [["Paris","Voici la description pour Paris",85,"Temp","False","Images/Paris.png"],
["Rome","Voici la description pour Rome",95,"Temp","False","Images/Rome.png"],
["Sydney","Voici la description pour Sydney",100,"Temp","True","Images/Sydney.png"],
["Wellington","Voici la description pour Paris",95,"Temp","False","Images/Wellington.png"],
["Safari","Voici la description pour un Safari",110,"Temp","True","Images/Safari.png"],
["Arctique","Voici la description pour un voyage vers l'Arctique",150,"Temp","True","Images/Nord.png"]];

//fonction qui créer un nouveau tableau avec les favoris
window.onload = function NouveauTableau () {
    TableauFavori = []
    for (index = 0; index < TableauDesDestination.length; index++){
        if (TableauDesDestination[index][4] == "True") {
            TableauFavori.push(TableauDesDestination[index])
        } 
    }
    return(document.getElementById("favori").innerHTML = TableauFavori)
}
