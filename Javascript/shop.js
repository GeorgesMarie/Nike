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

/*$(document).ready(function(){
			$(".add").click(function(){
				$(".ajout").html($(".ajout" + "1")
				console.log("ler clic fonctionne !")
			})
});*/


					/* SWIPER pour les images en bas de page */

$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:true,
		grabCursor: true,
		items: 4,
		paginationClickable: true
	})
	$('.arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	})
});


				/* Code du clic sur search qui affiche un
							input */

		$(document).ready(function(){
			$("#loupe").click(function(){
				$("#search").html("<input type='text' placeholder='...'/>")
			})
		})

				/* Code du clic sur sign in qui affiche un
					formulaire */

$(document).ready(function(){
		$("#bonhomme").click(function(){
			$("#sign").html("<input type='text' placeholder='Votre nom'/><br><input type='password' placeholder='Votre mot de passe'/><br><button type='submit'>Login");
		})
})
