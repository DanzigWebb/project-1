$(document).ready(function(){

	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	$('.reviews-slider').slick({
		dots: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('.gallery-content').slick({
		dots: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
	});


	var timer = function(element) {
		var _currentDate = new Date();
		var hours = 7;
		var count = 21;
		var sec = 31;
		var _toDate = new Date(_currentDate.getFullYear(),
				_currentDate.getMonth(),
				_currentDate.getDate(),
				_currentDate.getHours() + hours,
				_currentDate.getMinutes() + count,
				_currentDate.getSeconds() + sec, 1);
		element.countdown(_toDate, function(event) {
				var hours = event.strftime('%H');
				var min = event.strftime('%M');
				var sec = event.strftime('%S');
				$('.hour1').text(hours[0]);
				$('.hour2').text(hours[1]);
				$('.minute1').text(min[0]);
				$('.minute2').text(min[1]);
				$('.second1').text(sec[0]);
				$('.second2').text(sec[1]);
		});
};
timer($('.timer'));
	




});

// poll
// $('.poll-content-item').on('click', function() {
// 		$('.poll-item-line').addClass('active');
// 		$('.poll-content-item').addClass('active');
// 		$('.poll-content-item__footer span').text('561')
// });

$('.my-menu-button').on('click', function () {
	$(this).toggleClass('is-active');
	$('.header-menu').toggleClass('is-active');
})

$(document).on('click', function(e) {
	if (e.target !== $('.my-menu-button')[0]) {
					$('.my-menu-button').removeClass('is-active')
		$('.header-menu').removeClass('is-active')
	};
});


