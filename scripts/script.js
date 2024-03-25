/*function afficherResultat(score, nombreMotsProposes) {
  console.log("Votre score est de " + score + " / " + nombreMotsProposes);
}

function choisirPhrasesOuMots() {
  let choix = prompt(
    'Choississez une liste "mots" ou "phrases" pour choisir le type de jeu'
  );
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(
      'Choississez une liste "mots" ou "phrases" pour choisir le type de jeu'
    );
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    motUtilisateur = prompt("Recopiez : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nombreMotsProposes = 0;

  if (choix === "mots") {
    console.log("Vous avez choisi le jeu des mots");
    score = lancerBoucleDeJeu(listeMots);
    nombreMotsProposes = listeMots.length;
  } else {
    choix = "phrases";
    console.log("Vous avez choisi le jeu des phrases");
    score = lancerBoucleDeJeu(listePhrases);
    nombreMotsProposes = listePhrases.length;
  }
  afficherResultat(score, nombreMotsProposes);
}
*/
