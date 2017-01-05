					/* Function that changes central image  */
$(document).ready(function(){
			$('.nikeD').click(function(){
			$('.shoes').attr('src', 'Images/nike_replace.png');
			sound.play();
		});

		$('.nikeG').click(function(){
			$('.shoes').attr('src', 'Images/nike.png');
			sound.play();
		});

		$('.nikeT').click(function(){
			$('.shoes').attr('src', 'Images/nike_3.png');
			sound.play();
		});
})

					/* Now, try to create a click interaction on
						The link ADD TO CART which will add 1 to the cart */
$(document).ready(function(){
			var	$clicks = 0;
				$(".add, .add_2").click(function(){
					$clicks++;
				$(".ajout").html("(" + $clicks + ")");
				beepOne.play();
		});
});

					/* SWIPER for images on footer */
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
	/*	$(document).ready(function(){
			$("#loupe").click(function(){
				$("#search").html("<input type='text' placeholder='Search'/>");
			})
		})*/

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
				$(".heart").attr("src", "Images/heart_2.png");
	});
});

$(document).ready(function(){
				$("heart").click(function(){
				$(".heart").attr("src", "Images/heart.png");
		});
});

							/* Code that takes care of the form when you click on sign icon*/
function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });
}

$(function() {
  $('#fellow').on('click', function() {
		beep_beep.play();
    if($(this).hasClass('selected')) {
      deselect($(this));
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#contact'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

						/* Code js that plays sound at the time of the hover */
$(document).ready(function(){
			$(".options, #search, #cart, #sign").mouseenter(function(){
			beep.play();
		});
});
