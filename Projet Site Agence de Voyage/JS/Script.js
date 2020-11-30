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
    var reftable = document.getElementById("favoris")
    let indicefav = []
    for (var i = 0; i < tableaudestination.length; i++) {
        var tableau =document.getElementById(tableaudestination[i])
        var Ligne = document.getElementById(tableaudestination[i]).cells
        for (var j = 0; j < Ligne.length; j++) {
            if ((Ligne[j].className == "favori") && (Ligne[j].textContent == "True")) {
                indicefav.push(i)
            }
        }
        
   
    
                //nouvelleLigne = reftable.insertRow();
                //var nbLignes = reftable.rows.length;
                //for(var k=0; k < Ligne.length; k++){
                    //var cell = document.createElement("td");
                    //var cellText = document.createTextNode("cell in row "+i+", column "+j);
                    //cell.appendChild(cellText);
                    //row.appendChild(cell);
                    //cell = nouvelleLigne.insertCell(0); // création et insertion de la cellule 0
                    //cell.innerHTML = tableau[i][j].cell;
                    //console.log(tableau[i][j]);
            
        
    }
    generate_table(indicefav,document.getElementById(table1))
};
function generate_table(i,tableau) {
    // get the reference for the body
    NbLignes = i.length
    NbColonnes = tableau[0].length
    var body = document.getElementsByTagName("body")[0];
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // creating all cells
    for (var i = 0; i < NbLignes; i++) {
      // creates a table row
      var row = document.createElement("tr");
   
      for (var j = 0; j < NbColonnes; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(tableau[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
}