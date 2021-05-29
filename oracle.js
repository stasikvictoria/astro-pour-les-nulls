

let presentation = document.querySelector('.presentation_oracle') ; 
let regle = document.querySelector('.regles_oracle') ; 
let question = document.querySelector('.question_oracle') ;
let champQ = document.getElementById('champ_question') ; 
let RepOracle = document.querySelector(".reponse_oracle") ; 

//fonctions pour afficher ce qui est caché
function showRegles(){  
    presentation.style.display = 'none' ;
    regle.style.display= 'block';
}

function showQuestion(){  
    regle.style.display = 'none' ; 
    question.style.display= 'block';
}

function reponseOracle(){
    question.style.display = 'none'; 

}

function effacer_champQ() {
    champQ.value = "" ; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getReponse(){
    let UserQuestion = champQ.value  ;

    let new_div = document.createElement("div") ; 
    let new_p1 = document.createElement("p") ;
    new_p1.textContent = UserQuestion ; 
    new_div.appendChild(new_p1) ;

    const list_reponses = 
    ["reponse1", 
    "reponse2",
    "reponse3",
    "reponse4", 
    "Ne perdez pas espoir.", 
    "Celui qui sait croire en ses capacités ne s'éloigne jamais du chemin du succès.", 
    "Le chemin de la reussite se trouve sous les pas de celui qui marche le coeur confiant.",
    "Garde uniquement le positif en toi.", 
    "Fais ce que tu aimes, le reste n'est qu'un détail.", 
    "Si tu sais pourquoi tu le fais, alors rien ne pourra t'arrêter.", 
    "La déception ne tue pas, elle enseigne."
    ]; 
    
    let random = getRandomInt(list_reponses.length) ; 
    let reponse = list_reponses[random] ; 
    let new_p2 = document.createElement("p") ; 
    new_p2.textContent = reponse ;  
    new_div.appendChild(new_p2) ; 
    
    RepOracle.appendChild(new_div) ; 

    let button_restart = document.getElementById('restart') ; 
    RepOracle.insertBefore(new_div,button_restart) ; 
    
    question.style.display= 'none'; 
    RepOracle.style.display ='block' ; 

    new_p1.setAttribute("class", "UserQuestion") ; 
    new_p2.setAttribute("class","UserReponse") ; 
}

function restart() {
    effacer_champQ() ; 
    question.style.display = 'block' ; 
    RepOracle.style.display = 'none' ;
}
