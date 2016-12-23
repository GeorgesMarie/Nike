					/* Fonction qui change la propriété CSS quand on clique sur
						la nike de droite*/

$(document).ready(function(){
		$(".nikeD").click(function(){
			$(".shoes_replace").css("visibility", "visible");
			$(".shoes").css("visibility", "hidden");
		});
});

					/* Fonction qui change la propriété CSS quand on clique sur
						la nike de gauche*/

$(document).ready(function(){
		$(".nikeG").click(function(){
			$(".shoes").css("visibility", "visible");
			$(".shoes_replace").css("visibility", "hidden");
		});
});


					/* À présent, essayons de créer une interaction du click sur
						le lien ADD TO CART qui ajoutera 1 dans le panier */

/*
var ajout = document.getElementsByClassName('ajout'),
		cart = document.getElementsByClassName('add');

console.log(ajout);
console.log(cart);

function plus(){
		ajout = document.getElementsByClassName('ajout' + 1);
}

cart.addEventListener('click', plus);*/


					/* SWIPER pour les images en bas de page */

$(document).ready(function(){
	$('#carousel').caroufredsel({
		width: 960,
		scroll: 1,
		items: 3,
		duration: 3000,
		timeoutDuration: 3000,
	});
});
