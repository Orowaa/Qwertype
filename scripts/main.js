lancerJeu();

// id de la div contenant la zone de saisie
let inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);

// id du bouton de validation
let btnValiderMot = document.getElementById("btnValiderMot");
console.log(btnValiderMot);

// Div contenant la zone de proposition il n a pas d id donc on utilise querySelector
// pour selectionner la classe de la div on ecrit un point devant le nom de la classe
let divZoneproposition = document.querySelector(".zoneProposition");
console.log(divZoneproposition);


// pour selectionner span de score on utilise querySelector 
// pour selectionner la classe de la div on ecrit un point devant le nom de la classe
// et pour selectionner le span on ecrit un espace et le nom de la balise span
let spanScore = document.querySelector(".zoneScore span");
console.log(spanScore);

// pour selectionner tous les boutons radio on utilise querySelectorAll
// pour selectionner la classe de la div on ecrit un point devant le nom de la classe
// et pour selectionner les input on ecrit un espace et le nom de la balise input
let listeBtnRadio = document.querySelectorAll(".optionSource input");
console.log(listeBtnRadio);