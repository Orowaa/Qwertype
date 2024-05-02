/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span");
  // Ecriture du texte
  let affichageScore = `${score} / ${nbMotsProposes}`;
  // On place le texte à l'intérieur du span.
  spanScore.innerText = affichageScore;
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Mon score sur Super Clavier⌨️🚀&body=Salut, C'est ${nom}, je viens de réaliser un score de ${score} sur le site de Super Clavier 😁 ! Essaye de faire mieux 😉`;
  location.href = mailto;
}

/**
 *
 * @param {string} nom
 * @throws {Error} si le nom est trop court
 */
function validerNom(nom) {
  if (nom.length < 2) {
    throw new Error("Le nom est trop court");
  }
}
/**
 *
 * @param {*} email
 * @throws {Error} si l'email n'est pas valide
 */
function validerEmail(email) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"
  );
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide");
  }
}

function afficherMessageErreur(message) {
  let spanErreurMessage = document.getElementById("erreurMessage");

  if (!spanErreurMessage) {
    let popup = document.querySelector(".popup");
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = "erreurMessage";

    popup.append(spanErreurMessage);
  }
  spanErreurMessage.innerText = message;
}

function gererFormulaire(scoreEmail) {
  try {
    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value;
    validerNom(nom);

    let baliseEmail = document.getElementById("email");
    let email = baliseEmail.value;
    validerEmail(email);
    afficherMessageErreur("");
    afficherEmail(nom, email, scoreEmail);
  } catch (erreur) {
    // gestion d'erreurs
    afficherMessageErreur(erreur.message);
  }
}

function afficherTempsRestant(tempsRestant) {
  // Récupération de la zone où on va afficher le temps restant
  let spanTempsRestant = document.querySelector(".minuteur span");
  // Ecriture du texte
  let tempsRestantEnSecondes = `${tempsRestant} s`;
  // On place le temps à l'intérieur du span
  spanTempsRestant.innerText = tempsRestantEnSecondes;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  initAddEventListenerPopup();
  let score = 0;
  let i = 0;
  let listeProposition = listeMots;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  let compteur = document.getElementById("compteur");

  let tempsRestant = 60;
  let compteurEnCours = false;


  inputEcriture.addEventListener("input", () => {
  if (!compteurEnCours) {
    compteurEnCours = true;
    let tempsRestantEnSecondes = `${tempsRestant} s`;
    compteur.textContent = tempsRestantEnSecondes;

    let intervalId = setInterval(() => {
      tempsRestant--;
      tempsRestantEnSecondes = `${tempsRestant} s`;
      compteur.textContent = tempsRestantEnSecondes;

      if (tempsRestant <= 0) {
        clearInterval(intervalId);
        compteur.textContent = "Temps écoulé !";
        compteurEnCours = false;
        afficherProposition("Le jeu est fini");
        btnValiderMot.disabled = true;
      }
    }, 1000);
  }
});

inputEcriture.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Empêche l'envoi du formulaire
    btnValiderMot.click();
  }
});

  afficherProposition(listeProposition[i]);
  // Gestion de l'événement click sur le bouton "valider"
  btnValiderMot.addEventListener("click", () => {
    if (inputEcriture.value === listeProposition[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = "";
    if (listeProposition[i] === undefined) {
      afficherProposition("Le jeu est fini");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeProposition[i]);
    }
  });

  // Gestion de l'événement change sur les boutons radios.
  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      // Si c'est le premier élément qui a été modifié, alors nous voulons
      // jouer avec la listeMots.
      if (event.target.value === "1") {
        listeProposition = listeMots;
      } else {
        // Sinon nous voulons jouer avec la liste des phrases
        listeProposition = listePhrases;
      }
      // Et on modifie l'affichage en direct.
      afficherProposition(listeProposition[i]);
    });
  }
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let scoreEmail = `${score} / ${i}`;
    gererFormulaire(scoreEmail);
  });

  afficherResultat(score, i);
}
