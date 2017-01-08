					/* Function that changes central image  */
$(document).ready(function(){
			$('.nikeD').click(function(){
			$('.shoes').attr('src', 'Images/nike_replace.png');
		});

		$('.nikeG').click(function(){
			$('.shoes').attr('src', 'Images/nike.png');
		});
});

					/* Now, try to create a click interaction on
						The link ADD TO CART which will add 1 to the cart */
$(document).ready(function(){
				var	$clicks = 0;
				$(".add, .add_2").click(function(){
					$clicks++;
				$(".ajout").html("(" + $clicks + ")");
		});
				$("#cart").click(function(){
					while ($clicks != 0) {
						$clicks--;
						$(".ajout").html("(" + $clicks + ")");
					}
		});
});
					/* SWIPER for images on footer */
$(document).ready(function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:true,
		width: 575,
		grabCursor: true,
		slidesPerView: 2,
		spaceBetween: 1,
		paginationClickable: true,
	});
});
				/* Code of click on search which displays a Input */
		$(document).ready(function(){
			$("#search").click(function(){
					$("#search").html("<input type='text' placeholder='Search'/>");
					$("#icon li").css("left", "65%");
			});
	});

	$(document).ready(function(){
		$("#loupe").click(function(){
				$("#search").html("<a>SEARCH</a>");
				$("#icon li").css("left", "70%");
		});
});

							/* Id of the #frame following the scroll*/
	$(document).ready(function() {
								// Set this variable with the height of your sidebar + header
			var offsetPixels = 700;

			$(window).scroll(function() {
			if ($(window).scrollTop() > offsetPixels) {
			$( "#frame" ).css({
					"position": "fixed",
					"top": "20px"
				});
						} else {
							$( "#frame" ).css({
								"position": "absolute"
					});
				}
		});
});

								/* Code that changes the heart when you click */
$(document).ready(function(){
	$(".heart").click(function(){
		$(".heart").css("visibility", "hidden");
		$(".heart_2").css("visibility", "visible");
	});
});

$(document).ready(function(){
	$(".heart_2").click(function(){
			$(".heart_2").css("visibility", "hidden");
			$(".heart").css("visibility", "visible");
		});
});

							/* Code that takes care of the form when you click on sign icon*/
function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });
};

$(function() {
  $('#fellow').on('click', function() {
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
