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

    let belier = 0
    let taureau = 0
    let capricorne = 0
    let verseau = 0
    let scorpion = 0
    let poisson = 0
    let balance = 0
    let gemeaux = 0
    let cancer = 0
    let lion = 0
    let vierge = 0
    let sagittaire = 0

    tab_mois.forEach(function(mois, index1){
        tab_jours.forEach(function(jour, index2){
            tab_prenoms.forEach(function(prenom, index3){
                tab_noms.forEach(function(nom, index4){
                    if (index1 == index2 && index2==index3 && index3==index4){
                        if (mois == "01"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                                //Capricorne
                                capricorne ++
                                if (capricorne >= 2){
                                    document.querySelector("#titre_capricorne").textContent = "Vous êtes nés du 21 décembre au 20 janvier? Alors vous êtes Capricorne !"
                                }
                                else{
                                    document.querySelector("#titre_capricorne").textContent = prenom + " " + nom + " vous êtes Capricorne !"
                                }
                                document.querySelector("#capricorne").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Verseau
                                verseau ++
                                if (verseau >= 2){
                                    document.querySelector("#titre_verseau").textContent = "Vous êtes nés du 21 janvier au 19 février? Alors vous êtes Verseau !"
                                }
                                else{
                                    document.querySelector("#titre_verseau").textContent = prenom + " " + nom + " vous êtes Verseau !"
                                }
                                document.querySelector("#verseau").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            } 
                        }
                        else if (mois == "02"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19"){
                                //Verseau
                                verseau ++
                                if (verseau >= 2){
                                    document.querySelector("#titre_verseau").textContent = "Vous êtes nés du 21 janvier au 19 février? Alors vous êtes Verseau !"
                                }
                                else{
                                    document.querySelector("#titre_verseau").textContent = prenom + " " + nom + " vous êtes Verseau !"
                                }
                                document.querySelector("#verseau").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Poisson
                                poisson ++
                                if (poisson >= 2){
                                    document.querySelector("#titre_poisson").textContent = "Vous êtes nés du 20 février au 20 mars? Alors vous êtes Poissons !"
                                }
                                else{
                                    document.querySelector("#titre_poisson").textContent = prenom + " " + nom + " vous êtes Poisson !"
                                }
                                document.querySelector("#poisson").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            } 
                        }
                        else if (mois == "03"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                                //Poisson
                                poisson ++
                                if (poisson >= 2){
                                    document.querySelector("#titre_poisson").textContent = "Vous êtes nés du 20 février au 20 mars? Alors vous êtes Poissons !"
                                }
                                else{
                                    document.querySelector("#titre_poisson").textContent = prenom + " " + nom + " vous êtes Poisson !"
                                }
                                document.querySelector("#poisson").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Belier
                                belier ++
                                if (belier >= 2){
                                    document.querySelector("#titre_belier").textContent = "Vous êtes nés du 21 mars au 20 avril? Alors vous êtes Belier !"
                                }
                                else{
                                    document.querySelector("#titre_belier").textContent = prenom + " " + nom + " vous êtes Belier !"
                                }
                                document.querySelector("#belier").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "04"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                                //Belier
                                belier ++
                                if (belier >= 2){
                                    document.querySelector("#titre_belier").textContent = "Vous êtes nés du 21 mars au 20 avril? Alors vous êtes Belier !"
                                }
                                else{
                                    document.querySelector("#titre_belier").textContent = prenom + " " + nom + " vous êtes Belier !"
                                }
                                document.querySelector("#belier").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Taureau
                                taureau ++
                                if (taureau >= 2){
                                    document.querySelector("#titre_taureau").textContent = "Vous êtes nés du 21 avril au 20 mai? Alors vous êtes Taureau !"
                                }
                                else{
                                    document.querySelector("#titre_taureau").textContent = prenom + " " + nom + " vous êtes Taureau !"
                                }
                                document.querySelector("#taureau").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "05"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                                //Taureau
                                taureau ++
                                if (taureau >= 2){
                                    document.querySelector("#titre_taureau").textContent = "Vous êtes nés du 21 avril au 20 mai? Alors vous êtes Taureau !"
                                }
                                else{
                                    document.querySelector("#titre_taureau").textContent = prenom + " " + nom + " vous êtes Taureau !"
                                }
                                document.querySelector("#taureau").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Gemeaux
                                gemeaux ++
                                if (gemeaux >= 2){
                                    document.querySelector("#titre_gemeaux").textContent = "Vous êtes nés du 21 mai au 21 juin? Alors vous êtes Gemeaux !"
                                }
                                else{
                                    document.querySelector("#titre_gemeaux").textContent = prenom + " " + nom + " vous êtes Gemeaux !"
                                }
                                document.querySelector("#gemeaux").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            } 
                        }
                        else if (mois == "06"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21"){
                                //Gemeaux
                                gemeaux ++
                                if (gemeaux >= 2){
                                    document.querySelector("#titre_gemeaux").textContent = "Vous êtes nés du 21 mai au 21 juin? Alors vous êtes Gemeaux !"
                                }
                                else{
                                    document.querySelector("#titre_gemeaux").textContent = prenom + " " + nom + " vous êtes Gemeaux !"
                                }
                                document.querySelector("#gemeaux").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Cancer
                                cancer ++
                                if (cancer >= 2){
                                    document.querySelector("#titre_cancer").textContent = "Vous êtes nés du 22 juin au 23 juillet? Alors vous êtes Cancer !"
                                }
                                else{
                                    document.querySelector("#titre_cancer").textContent = prenom + " " + nom + " vous êtes Cancer !"
                                }
                                document.querySelector("#cancer").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "07"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                                //Cancer
                                cancer ++
                                if (cancer >= 2){
                                    document.querySelector("#titre_cancer").textContent = "Vous êtes nés du 22 juin au 23 juillet? Alors vous êtes Cancer !"
                                }
                                else{
                                    document.querySelector("#titre_cancer").textContent = prenom + " " + nom + " vous êtes Cancer !"
                                }
                                document.querySelector("#cancer").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Lion
                                lion ++
                                if (lion >= 2){
                                    document.querySelector("#titre_lion").textContent = "Vous êtes nés du 24 juillet au 23 août? Alors vous êtes Lion !"
                                }
                                else{
                                    document.querySelector("#titre_lion").textContent = prenom + " " + nom + " vous êtes Lion !"
                                }
                                document.querySelector("#lion").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            } 
                        }
                        else if (mois == "08"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                                //Lion
                                lion ++
                                if (lion >= 2){
                                    document.querySelector("#titre_lion").textContent = "Vous êtes nés du 24 juillet au 23 août? Alors vous êtes Lion !"
                                }
                                else{
                                    document.querySelector("#titre_lion").textContent = prenom + " " + nom + " vous êtes Lion !"
                                }
                                document.querySelector("#lion").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Vierge
                                vierge ++
                                if (vierge >= 2){
                                    document.querySelector("#titre_vierge").textContent = "Vous êtes nés du 24 août au 23 septembre? Alors vous êtes Vierge !"
                                }
                                else{
                                    document.querySelector("#titre_vierge").textContent = prenom + " " + nom + " vous êtes Vierge !"
                                }
                                document.querySelector("#vierge").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "09"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                                //Vierge
                                vierge ++
                                if (vierge >= 2){
                                    document.querySelector("#titre_vierge").textContent = "Vous êtes nés du 24 août au 23 septembre? Alors vous êtes Vierge !"
                                }
                                else{
                                    document.querySelector("#titre_vierge").textContent = prenom + " " + nom + " vous êtes Vierge !"
                                }
                                document.querySelector("#vierge").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Balance
                                balance ++
                                if (balance >= 2){
                                    document.querySelector("#titre_balance").textContent = "Vous êtes nés du 24 septembre au 23 octobre? Alors vous êtes Balance !"
                                }
                                else{
                                    document.querySelector("#titre_balance").textContent = prenom + " " + nom + " vous êtes Balance !"
                                }
                                document.querySelector("#balance").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            } 
                        }
                        else if (mois == "10"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22" || jour == "23"){
                                //Balance
                                balance ++
                                if (balance >= 2){
                                    document.querySelector("#titre_balance").textContent = "Vous êtes nés du 24 septembre au 23 octobre? Alors vous êtes Balance !"
                                }
                                else{
                                    document.querySelector("#titre_balance").textContent = prenom + " " + nom + " vous êtes Balance !"
                                }
                                document.querySelector("#balance").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Scorpion
                                scorpion ++
                                if (scorpion >= 2){
                                    document.querySelector("#titre_scorpion").textContent = "Vous êtes nés du 24 octobre au 22 novembre? Alors vous êtes Scorpion !"
                                }
                                else{
                                    document.querySelector("#titre_scorpion").textContent = prenom + " " + nom + " vous êtes Scorpion !"
                                }
                                document.querySelector("#scorpion").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "11"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20" || jour == "21" || jour == "22"){
                                //Scorpion
                                scorpion ++
                                if (scorpion >= 2){
                                    document.querySelector("#titre_scorpion").textContent = "Vous êtes nés du 24 octobre au 22 novembre? Alors vous êtes Scorpion !"
                                }
                                else{
                                    document.querySelector("#titre_scorpion").textContent = prenom + " " + nom + " vous êtes Scorpion !"
                                }
                                document.querySelector("#scorpion").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Sagittaire
                                sagittaire ++
                                if (sagittaire >= 2){
                                    document.querySelector("#titre_sagittaire").textContent = "Vous êtes nés du 23 novembre au 20 décembre? Alors vous êtes Sagittaire !"
                                }
                                else{
                                    document.querySelector("#titre_sagittaire").textContent = prenom + " " + nom + " vous êtes Sagittaire !"
                                }
                                document.querySelector("#sagittaire").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                        else if (mois == "12"){
                            if(jour == "01" || jour == "02" || jour == "03" || jour == "04" || jour == "05" || jour == "06" || jour == "07" || jour == "08" || jour == "09" || jour == "10" || jour == "11" || jour == "12" || jour == "13" || jour == "14" || jour == "15" || jour == "16" || jour == "17" || jour == "18" || jour == "19" || jour == "20"){
                                //Sagittaire
                                sagittaire ++
                                if (sagittaire >= 2){
                                    document.querySelector("#titre_sagittaire").textContent = "Vous êtes nés du 23 novembre au 20 décembre? Alors vous êtes Sagittaire !"
                                }
                                else{
                                    document.querySelector("#titre_sagittaire").textContent = prenom + " " + nom + " vous êtes Sagittaire !"
                                }
                                document.querySelector("#sagittaire").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }
                            else{
                                //Capricorne
                                capricorne ++
                                if (capricorne >= 2){
                                    document.querySelector("#titre_capricorne").textContent = "Vous êtes nés du 21 décembre au 20 janvier? Alors vous êtes Capricorne !"
                                }
                                else{
                                    document.querySelector("#titre_capricorne").textContent = prenom + " " + nom + " vous êtes Capricorne !"
                                }
                                document.querySelector("#capricorne").className = 'afficher'
                                document.querySelector("#sources").className = 'afficher'
                            }  
                        }
                    }
                })
            })
        })
    })
}

 
     
 
 
    







