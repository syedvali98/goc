AOS.init({
	duration: 800,
	easing: 'slide'
});

$(document).ready(function ($) {

	"use strict";

	$("#select-3").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "none" });
		$(".member4-details").css({ "display": "none" });
	});

	$("#select-4").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "block" });
		$(".member4-details").css({ "display": "none" });
	});

	$("#select-5").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "block" });
		$(".member4-details").css({ "display": "block" });
	});

	$("#team-details").submit(function (e) {
		e.preventDefault()

		var teamleader = $("#name").val();
		var teamemail = $("#email").val();
		var teamnumber = $("#mob").val();

		var memname  = $("#name1").val();
		var memmail = $("#email1").val();
		var memnumber = $("#mob1").val();

		var memname2  = $("#name2").val();
		var memmail2 = $("#email2").val();
		var memnumber2 = $("#mob2").val();

		var memname3  = $("#name3").val();
		var memmail3 = $("#email3").val();
		var memnumber3 = $("#mob3").val();

		var memname4  = $("#name4").val();
		var memmail4 = $("#email4").val();
		var memnumber4 = $("#mob4").val();

		 var database = firebase.database().ref("Registration")
		 
		 var register = {
			 "Team Leader":{
				 "name" : teamleader,
				 "email": teamemail,
				 "Mobile number":teamnumber
			 },
			 "member 1":{
				"name" : memname,
				"email": memmail,
				"Mobile number":memnumber
			 },
			 "member 2":{
				"name" : memname2,
				"email": memmail2,
				"Mobile number":memnumber2
			 },
			 "member 3":{
				"name" : memname3,
				"email": memmail3,
				"Mobile number":memnumber3
			 },
			 "member 4":{
				"name" : memname4,
				"email": memmail4,
				"Mobile number":memnumber4
			 },
			 
		 }

		 database.push(register);
		 alert("success");
		 document.querySelector('form').reset();

	})

	// Scrollax
	$.Scrollax();


	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			dots: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false
				}
			}
		});
	};
	carousel();

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function () {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();

	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('#appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#appointment_time').timepicker();

	var pageProgress = function () {
		$(window).scroll(function () {
			var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
			// console.log(wintop);
			var totalScroll = (wintop / (docheight - winheight)) * 100;
			// console.log("total scroll" + totalScroll);
			$(".KW_progressBar").css("width", totalScroll + "%");
		});

	};
	pageProgress();


});

