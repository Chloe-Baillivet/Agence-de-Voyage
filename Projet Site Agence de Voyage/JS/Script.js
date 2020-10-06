function CalculDuPrix(){
    let nbjour=
    jour(document.getElementById('Date-d-arrivee').value,
    document.getElementById('Date-de-depart').value)
    let PrixParJour=
    CalculPriXParJour(document.getElementById('Nb-Adulte').value,
    document.getElementById('Nb-Enfant').value,
    document.getElementsByClassName('Petit-dejeuner').value)
    document.getElementById('resultat').innerHTML=(nbjour*PrixParJour)
}

function