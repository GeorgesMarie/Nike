console.log("Le dom est prêt !");

			/* Déclaration de variables dans lesquelles je stocke
					les classes que je vais manipuler */

var nikeG = document.getElementsByClassName('nikeG'),
		nikeD = document.getElementsByClassName('nikeD'),
		recup_shoes = document.getElementsByClassName('shoes'),
		recup_shoesReplace = document.getElementsByClassName('shoes_replace');

					/*Vérification des classes récupérées en les affichant dans la
						console */
console.log(nikeG);
console.log(nikeD);
console.log(recup_shoes);
console.log(recup_shoesReplace);

					/* Fonction qui change la propriété CSS quand on clique sur
						la nike de droite */

function masque(){
		document.getElementsByClassName("shoes_replace").style.visibility=visible;
		document.getElementsByClassName("shoes").style.visibility=hidden;
};

nikeD.addEventListener("click", masque);

					/* Fonction qui change la propriété CSS quand on clique sur
						la nike de gauche */

function affiche(){
		document.getElementsByClassName("shoes_replace").style.visibility=hidden;
		document.getElementsByClassName("shoes").style.visibility=visible;
};

nikeG.addEventListener("click", affiche);
