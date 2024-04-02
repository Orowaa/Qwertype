// les fonctions nécessaires au fonctionnement du jeu.

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");

  // On affiche le score de l'utilisateur en utilisant l'interpolation de chaîne de caractères
  let affichageScore = `${score} / ${nbMotsProposes}`;

  // On relie le score à la balise span
  spanScore.innerText = affichageScore;
}
function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}
/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  let score = 0;
  let i = 0;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  // On affiche la première proposition qu'on a choisie aléatoirement dans la liste
  afficherProposition(listeMots[i]);

  // On écoute l'événement "click" sur le bouton de validation
  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    if (inputEcriture.value === listeMots[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    // permet de vider la zone de saisie après validation
    inputEcriture.value = "";
    if (listeMots[i] === undefined) {
      afficherProposition("Fin du jeu");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeMots[i]);
    }
  });

  afficherResultat(score, i);
}
