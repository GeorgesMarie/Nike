					/* Function that changes the CSS
					property when you click
					The right nike */
$(document).ready(function(){
		$(".nikeD").click(function(){
			$(".shoes_replace").css("visibility", "visible");
			$(".shoes").css("visibility", "hidden");
		});
});
					/* Function that changes the CSS
					property when you click
					The left nike */
$(document).ready(function(){
		$(".nikeG").click(function(){
			$(".shoes").css("visibility", "visible");
			$(".shoes_replace").css("visibility", "hidden");
		});
});

					/* Now, try to create a click interaction on
						The link ADD TO CART which will add 1 to the cart */
$(document).ready(function(){
			var $clicks = 0;
				$(".add").click(function(){
				$clicks++;
				$(".ajout").html("(" + $clicks + ")");
		});
});

$(document).ready(function(){
			var $clicks = 0;
				$(".add_2").click(function(){
				$clicks++;
				$(".ajout").html("(" + $clicks + ")");
		});
});

					/* SWIPER for footer images */
$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:true,
		grabCursor: true,
		slidesPerView: 4,
		spaceBetween: 3,
		paginationClickable: true,
	})
});
				/* Code of click on search
					which displays a
					Input */
		$(document).ready(function(){
			$("#loupe").click(function(){
				$("#search").html("<input type='text' placeholder='Search'/>");
			})
		})

				/* Code of the click on sign
				 	in which displays a
					form */
$(document).ready(function(){
		$("#bonhomme").click(function(){
			$("#sign").html("<input type='text' placeholder='Votre nom'/><br><input type='password' placeholder='Votre mot de passe'/><br><button type='submit'>Login");
		})
})

							/* Id of the #frame following the scroll*/
$(document).ready(function(){
	$(window).scroll(function(){

		if ($(window).scrollTop() > 500 && $(window).scrollTop() < 1000)

		$("#frame").css("position", "absolute").css("top", -624);

	});
});

								/* Code that changes the heart when you click */
$(document).ready(function(){
				$(".heart").click(function(){
				$(".heart_2").css("visibility", "visible");
				$(".heart").css("visibility", "hidden");
	});
});

$(document).ready(function(){
				$(".heart_2").click(function(){
				$(".heart").css("visibility", "visible");
				$(".heart_2").css("visibility", "hidden");
	});
});
