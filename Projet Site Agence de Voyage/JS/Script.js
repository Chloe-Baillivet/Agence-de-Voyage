function CalculDuPrix(){
    DA = new Date(document.getElementById('Date-d-arrivee').value).getTime()
    
    DD = new Date(document.getElementById('Date-de-depart').value).getTime()
    console.log(DA+"---"+DD)
    let nbjour =
    jour(DA,DD)
    let PrixParJour =
    CalculPrixParJour(document.getElementById('Nb-Adulte').value,
    document.getElementById('Nb-Enfant').value,
    document.getElementById('Petit-dejeunerO').checked)
    return(document.getElementById('resultat').innerHTML=(nbjour*PrixParJour))
}

function jour(DateA,DateD){
   return((DD-DA)/86400000)
}

function CalculPrixParJour(NbA,NbE,Petitdej){
    console.log(Petitdej)
    if (Petitdej) {
        let prixparA=
        NbA*90
        let prixparE=
        NbE*70
       
        return (prixparA+prixparE)
    }
    else {
        let prixparA=
        NbA*85
        let prixparE=
        NbE*65 
        console.log(prixparA)
        return (prixparA+prixparE)
    }
}
