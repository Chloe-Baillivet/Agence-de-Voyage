function CalculDuPrix(){
    let nbjour =
    jour(document.getElementById('Date-d-arrivee').value,
    document.getElementById('Date-de-depart').value)
    
    console.log(document.getElementById('Date-d-arrivee').value)
    let PrixParJour =
    CalculPrixParJour(document.getElementById('Nb-Adulte').value,
    document.getElementById('Nb-Enfant').value,
    document.getElementById('Petit-dejeunerO').checked)
    return(document.getElementById('resultat').innerHTML=(nbjour*PrixParJour))
}

function jour(DateA,DateD){
   // document.getElementById('test').innerHTML=(DateD-DateA)
  //  var diffDays =
    const diffTime = Math.abs(DateA - DateD);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        
    // DateD.getDate() - DateA.getDate(); 
    console.log(diffTime + "good");
    console.log(diffDays +"bad");
     return (diffDays);    
}

function CalculPrixParJour(NbA,NbE,Petitdej){
    console.log(Petitdej)
    console.log(NbA)
    if ('Petitdej'=='true') {
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
