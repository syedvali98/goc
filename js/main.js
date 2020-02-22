AOS.init({
	duration: 800,
	easing: 'slide'
});

$(document).ready(function ($) {

	"use strict";
	$("#name").prop('required', true);
	$("#email").prop('required', true);
	$("#mob").prop('required', true);
	$("#name1").prop('required', true);
	$("#email1").prop('required', true);
	$("#mob1").prop('required', true);
	$("#name2").prop('required', true);
	$("#email2").prop('required', true);
	$("#mob2").prop('required', true);

	$("#teamsize").html("3")


	$("#select-3").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "none" });
		$(".member4-details").css({ "display": "none" });
		$("#name").prop('required', true);
		$("#email").prop('required', true);
		$("#mob").prop('required', true);
		$("#name1").prop('required', true);
		$("#email1").prop('required', true);
		$("#mob1").prop('required', true);
		$("#name2").prop('required', true);
		$("#email2").prop('required', true);
		$("#mob2").prop('required', true);
		$("#name3").prop('required', false);
		$("#email3").prop('required', false);
		$("#mob3").prop('required', false);
		$("#name4").prop('required', false);
		$("#email4").prop('required', false);
		$("#mob4").prop('required', false);
		$("#teamsize").html("3")
	});

	$("#select-4").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "block" });
		$(".member4-details").css({ "display": "none" });
		$("#name").prop('required', true);
		$("#email").prop('required', true);
		$("#mob").prop('required', true);
		$("#name1").prop('required', true);
		$("#email1").prop('required', true);
		$("#mob1").prop('required', true);
		$("#name2").prop('required', true);
		$("#email2").prop('required', true);
		$("#mob2").prop('required', true);
		$("#name3").prop('required', true);
		$("#email3").prop('required', true);
		$("#mob3").prop('required', true);
		$("#name4").prop('required', false);
		$("#email4").prop('required', false);
		$("#mob4").prop('required', false);
		$("#teamsize").html("4")
	});

	$("#select-5").click(function () {
		$(".leader-details").css({ "display": "block" });
		$(".member1-details").css({ "display": "block" });
		$(".member2-details").css({ "display": "block" });
		$(".member3-details").css({ "display": "block" });
		$(".member4-details").css({ "display": "block" });
		$("#name").prop('required', true);
		$("#email").prop('required', true);
		$("#mob").prop('required', true);
		$("#name1").prop('required', true);
		$("#email1").prop('required', true);
		$("#mob1").prop('required', true);
		$("#name2").prop('required', true);
		$("#email2").prop('required', true);
		$("#mob2").prop('required', true);
		$("#name3").prop('required', true);
		$("#email3").prop('required', true);
		$("#mob3").prop('required', true);
		$("#name4").prop('required', true);
		$("#email4").prop('required', true);
		$("#mob4").prop('required', true);
		$("#teamsize").html("5")
	});

	$("#team-details").submit(function (e) {
		e.preventDefault()

		var teamname = $("#tname").val();
		var teamleader = $("#name").val();
		var teamemail = $("#email").val();
		var teamnumber = $("#mob").val();

		var memname = $("#name1").val();
		var memmail = $("#email1").val();
		var memnumber = $("#mob1").val();

		var memname2 = $("#name2").val();
		var memmail2 = $("#email2").val();
		var memnumber2 = $("#mob2").val();

		var memname3 = $("#name3").val();
		var memmail3 = $("#email3").val();
		var memnumber3 = $("#mob3").val();

		var memname4 = $("#name4").val();
		var memmail4 = $("#email4").val();
		var memnumber4 = $("#mob4").val();



		var database = firebase.database().ref("Registration")

		var register = {
			"Team Name": teamname,
			"details": {
				"Team Leader": {
					"name": teamleader,
					"email": teamemail,
					"Mobile number": teamnumber
				},
				"member 1": {
					"name": memname,
					"email": memmail,
					"Mobile number": memnumber
				},
				"member 2": {
					"name": memname2,
					"email": memmail2,
					"Mobile number": memnumber2
				},
				"member 3": {
					"name": memname3,
					"email": memmail3,
					"Mobile number": memnumber3
				},
				"member 4": {
					"name": memname4,
					"email": memmail4,
					"Mobile number": memnumber4
				},
			}
		}

		database.push(register);
	alert("success");
	document.querySelector('form').reset();

})

$("#fintech").click(function () {
	var data = `<p>Fin- tech is a new financial industry that applies technology to improve financial activities. It aims to compete with the traditional financial methods.
		Your aim is to create an innovative idea that improves the financial service processes by proposing technological solutions according to different business situations. The key areas of financial technology  you can work on is automate insurance, trading, banking services and risk management.
	   </p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('Fin-Tech')

})

$("#health").click(function () {
	var data = `<p>As the global population continues to explode, the world’s healthcare systems are straining to keep up with increased demand. That’s why some outside-the-box thinking is necessary to keep the planet’s population healthy.
		Keeping this in mind you have to create a prototyping health tech or an app. That helps to solve health care problems.
		 </p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('Health Care')


})

$("#vui").click(function () {
	var data = `<p>It stands for  voice-user interface. A VUI is the interface to any speech application. VUIs have become more common and people are taking advantage of the value that these hands-free, eyes-free interfaces provide in many situations. Your aim is to design a VUI that is effective, matches the  user’s mental model of task, easier to use and provides help and guidance.
		</p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('VUI')


})

$("#smart").click(function () {
	var data = `<p>The purpose of  Smart City is to drive economic growth and improve the quality of life of people by enabling local area development and harnessing technology that leads to Smart outcomes. Smart city is an urban area that uses different types of electronic Internet of Things (IoT) sensors to collect data and then use insights gained from that data to manage assets, resources and services efficiently. Your aim is to create a prototype that technological, economically and environmentally allows for real time responses.
		</p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('Smart City')


})

$("#block").click(function () {
	var data = `<p>A block chain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block. Block chain technology can be integrated into multiple areas </p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('BlockChain')


})

$("#ai").click(function () {
	var data = `<p>In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans.
		Machine Learning(ML) can be explained as automating and improving the learning process of computers based on their experiences without being actually programmed i.e. without any human assistance. </p>`
	$('#exampleModalCenter').modal('toggle')
	$("#modal").html(data)
	$('#exampleModalCenterTitle').html('AI/ML')


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

