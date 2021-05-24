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

    tab_mois.forEach(function(mois){
        tab_jours.forEach(function(jour){
            if (mois == "01"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                    //Capricorne
                    document.querySelector("#capricorne").className = 'afficher'
                }
                else{
                    //Verseau
                    document.querySelector("#verseau").className = 'afficher'
                } 
            }
            else if (mois == "02"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19"){
                    //Verseau
                    document.querySelector("#verseau").className = 'afficher'
                }
                else{
                    //Poisson
                    document.querySelector("#poisson").className = 'afficher'
                } 
            }
            else if (mois == "03"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                    //Poisson
                    document.querySelector("#poisson").className = 'afficher'
                }
                else{
                    //Belier
                    document.querySelector("#belier").className = 'afficher'
                }  
            }
            else if (mois == "04"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                    //Belier
                    document.querySelector("#belier").className = 'afficher'
                }
                else{
                    //Taureau
                    document.querySelector("#taureau").className = 'afficher'
                }  
            }
            else if (mois == "05"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                    //Taureau
                    document.querySelector("#taureau").className = 'afficher'
                }
                else{
                    //Gemeaux
                    document.querySelector("#gemeaux").className = 'afficher'
                } 
            }
            else if (mois == "06"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21"){
                    //Gemeaux
                    document.querySelector("#gemeaux").className = 'afficher'
                }
                else{
                    //Cancer
                    document.querySelector("#cancer").className = 'afficher'
                }  
            }
            else if (mois == "07"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                    //Cancer
                    document.querySelector("#cancer").className = 'afficher'
                }
                else{
                    //Lion
                    document.querySelector("#lion").className = 'afficher'
                } 
            }
            else if (mois == "08"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                    //Lion
                    document.querySelector("#lion").className = 'afficher'
                }
                else{
                    //Vierge
                    document.querySelector("#vierge").className = 'afficher'
                }  
            }
            else if (mois == "09"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                    //Vierge
                    document.querySelector("#vierge").className = 'afficher'
                }
                else{
                    //Balance
                    document.querySelector("#balance").className = 'afficher'
                } 
            }
            else if (mois == "10"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                    //Balance
                    document.querySelector("#balance").className = 'afficher'
                }
                else{
                    //Scorpion
                    document.querySelector("#scorpion").className = 'afficher'
                }  
            }
            else if (mois == "11"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22"){
                    //Scorpion
                    document.querySelector("#scorpion").className = 'afficher'
                }
                else{
                    //Sagittaire
                    document.querySelector("#sagittaire").className = 'afficher'
                }  
            }
            else if (mois == "12"){
                if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                    //Sagittaire
                    document.querySelector("#sagittaire").className = 'afficher'
                }
                else{
                    //Capricorne
                    document.querySelector("#capricorne").className = 'afficher'
                }  
            }
        })
    })
    
    /*
    for(let i = 0; i < tab_jours.length; i++){
        console.log(tab_jours[i]);
    }
    */

    const signe = "lol" 
    //window.open("belier.html")
    if(tab_mois[0] == '05'){
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
 
     
 
 
    







