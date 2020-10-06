function CalculDuPrix(){
    let nbjour=
    jour(document.getElementById('Date-d-arrivee').value,
    document.getElementById('Date-de-depart').value)
    
    console.log(document.getElementById('Date-d-arrivee').value)
    let PrixParJour=
    CalculPriXParJour(document.getElementById('Nb-Adulte').value,
    document.getElementById('Nb-Enfant').value,
    document.getElementsByClassName('Petit-dejeuner').value)
    document.getElementById('resultat').innerHTML=(nbjour*PrixParJour)
}

function jour(DateA,DateD){
   // document.getElementById('test').innerHTML=(DateD-DateA)
  //  var diffDays =
    const diffTime = Math.abs(DateA - DateD);
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        
    // DateD.getDate() - DateA.getDate(); 
    console.log(diffTime + "dfd");
    console.log(diffDays +"jh");
     return (diffDays);    
}
function CalculPriXParJour(NbA,NbE,Petitdej){
    if (value(Petitdej)=='oui') {
        let prixparA=
        NbA*90
        let prixparE=
        NbE*70
        console.log(prixparA)
        return (prixparA+prixparE)
    }
    else {
        let prixparA=
        NbA*85
        let prixparE=
        NbE*65
        return (prixparA+prixparE)
    }
}
