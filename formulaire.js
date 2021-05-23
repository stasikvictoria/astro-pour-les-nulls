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

function valider(event){
    event.preventDefault()
    const lignes = document.getElementById("tab").rows 
    let tab_mois = new Array(lignes.length - 2)
    let tab_jours = new Array(lignes.length - 2)
    let tab_prenoms = new Array(lignes.length - 2)
    let tab_noms = new Array(lignes.length - 2)
    const longueur = lignes.length
    for(let i=2; i<longueur; i++)
    {
        let colonnes = lignes[i].cells
        let largeur = colonnes.length

        for(let j=0; j<largeur; j++)
        {
            if(j == 0){
                let n = colonnes[0].innerHTML
                tab_noms.push(n)
            }
            else if(j == 1){
                let p = colonnes[1].innerHTML
                tab_prenoms.push(p)
            }
            else if(j == 2){
                let cellule = colonnes[2].innerHTML
                let annee = cellule[0] + cellule[1] + cellule[2] + cellule[3]
                let mois = cellule[5] + cellule[6]
                let jour = cellule[8] + cellule[9]
                tab_mois.push(mois)
                tab_jours.push(jour)
            }
        }
    }
    const signe = "lol" 
    window.open("belier.html")
    if(tab_mois[0] == "03"){
        console.log("yess")
        if(jour <= 20){
            signe = "poisson"
        }
        else{
            signe = "belier"
        }
    }
    console.log(signe)
}



function showUsers(){
    document.querySelector("#utilisateurs").className = 'afficher'
    document.querySelector("#taches").className = 'cacher'
}

function showTasks(){
    document.querySelector("#utilisateurs").className = 'cacher'
    document.querySelector("#taches").className = 'afficher'
}
 
     
 
 
    







