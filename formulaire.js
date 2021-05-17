function ajouter(event){
    event.preventDefault()
    let nom = document.getElementById("nom").value
    let prenom = document.getElementById("prenom").value
    let date = document.getElementById("date").value
    let table = document.getElementById("tab")

    const newLigne = document.createElement("tr")
    const newColonne1 = document.createElement("td")
    const newColonne2 = document.createElement("td")
    const newColonne3 = document.createElement("td")
    
    newLigne.appendChild(newColonne1)
    newLigne.appendChild(newColonne2)
    newLigne.appendChild(newColonne3)

    newColonne1.textContent = nom
    newColonne2.textContent = prenom
    newColonne3.textContent = date

    if(nom!="" && prenom!=""){
        table.appendChild(newLigne)
        document.getElementById("form").reset()
    }
    else{
        alert("Veullez saisir un nom et un prénom!")
    }
}  

function supprimer(event) {
    event.preventDefault()
    let table = document.getElementById("tab")
    if (table.rows.length > 2){
        table.deleteRow(-1)
    }
}






