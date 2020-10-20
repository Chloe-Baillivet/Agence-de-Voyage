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

window.onload = function () {
    var tableaudestination = ["Paris", "Rome", "Sydney", "Wellington", "Safari", "Arctique"];
    for (var i = 0; i < tableaudestination.length; i++) {
        var Cells = document.getElementById(tableaudestination[i]).cells
        for (var j = 0; j < Cells.length; j++) {
            if ((Cells[j].className == "favori") && (Cells[j].textContent == "True")) {
               //ajouter la ligne au tableau favori
            }
        }
    }
};