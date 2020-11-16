

$(document).ready(function () {
	function resetBG() {
		var con01 = $("#content01");
		var bgop = $(".bgOpacity");

		bgop.stop().velocity({ opacity: '1' }, 400);

		setTimeout(function () {
			con01.removeClass("bg02 bg03 bg04 bg05");
			con01.addClass("bg01");
			bgop.stop().velocity({ opacity: '0' }, 400);
		}, 400);

		$("#navBoard > ul > li").css("background", "none");

		event.preventDefault();
	};

	function chart() {
		$('.animbar').each(function (i) {
			var $bar = $(this);
			$(this).append('<span class="count"></span>')
			setTimeout(function () {
				$bar.css('width', $bar.attr('data-percent'));
			}, i * 100);
		});

		$('.count').each(function () {
			$(this).prop('Counter', 0).animate({
				counter: $(this).parent('.animbar').attr('data-percent')
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now) + '%');
				}
			});
		});
	};
	$("#homeBtn").click(function () {
		resetBG();
	});

	$("#navBtn").click(function () {
		$(".sideNav").animate({ width: ["toggle", "swing"] }, 200);
	});

	(function () {

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		}

	})();

	$("#mainLogo").hover(
		function () {
			resetBG();
		},
		function () {
		}
	);

	$("#aboutme").hover(
		function (event) {
			var con01 = $("#content01");
			var bgop = $(".bgOpacity");
			bgop.stop().velocity({ opacity: '1' }, 400);

			setTimeout(function () {
				con01.removeClass("bg01 bg03 bg04 bg05");
				con01.addClass("bg02");
				bgop.stop().velocity({ opacity: '0' }, 400);
			}, 400);

			$("#navBoard > ul > li").css("background", "none");
			$("#aboutme").css("background", "#660033");

			event.preventDefault();
		},
		function () {
		}
	);

	$("#experience").hover(
		function (event) {
			var con01 = $("#content01");
			var bgop = $(".bgOpacity");
			bgop.stop().velocity({ opacity: '1' }, 400);

			setTimeout(function () {
				con01.removeClass("bg01 bg02 bg04 bg05");
				con01.addClass("bg03");
				bgop.stop().velocity({ opacity: '0' }, 400);
			}, 400);

			$("#navBoard > ul > li").css("background", "none");
			$("#experience").css("background", "#5D1746");

			event.preventDefault();
		},
		function () {
		}
	);

	$("#jobskills").hover(
		function (event) {
			var con01 = $("#content01");
			var bgop = $(".bgOpacity");
			bgop.stop().velocity({ opacity: '1' }, 400);

			setTimeout(function () {
				con01.removeClass("bg01 bg02 bg03 bg05");
				con01.addClass("bg04");
				bgop.stop().velocity({ opacity: '0' }, 400);
			}, 400);

			$("#navBoard > ul > li").css("background", "none");
			$("#jobskills").css("background", "#532E58");

			event.preventDefault();
		},
		function () {
		}
	);

	$("#inquiries").hover(
		function (event) {
			var con01 = $("#content01");
			var bgop = $(".bgOpacity");
			bgop.stop().velocity({ opacity: '1' }, 400);

			setTimeout(function () {
				con01.removeClass("bg01 bg02 bg03 bg04");
				con01.addClass("bg05");
				bgop.stop().velocity({ opacity: '0' }, 400);
			}, 400);

			$("#navBoard > ul > li").css("background", "none");
			$("#inquiries").css("background", "#4A466B");

			event.preventDefault();
		},
		function () {
		}
	);

	$('.popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$(function () {
		$('.chart').easyPieChart({
			barColor: '#ef1e25',
			trackColor: '#f2f2f2',
			scaleColor: '#000000',
			size: '100',
			animate: '2000'
		});
	});

	$('.sendBtn').click(function () {

		var email_check = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		if ($('.username').val() == '') {
			alert('이름을 적어주세요');
			$('.username').focus();
			return false;
		} else if ($('.phone').val() == '') {
			alert('연락처를 적어주세요');
			$('.phone').focus();
			return false;
		} else if ($('.from').val() == '') {
			alert('이메일 주소를 적어주세요');
			$('.from').focus();
			return false;
		} else if (!email_check.test($('.from').val())) {
			alert('올바른 이베일 주소를 적어주세요');
			$('.from').focus();
			return false;
		} else if ($('.inquiries').val() == '') {
			alert('내용을 적어주세요');
			$('.inquiries').focus();
			return false;
		}

		var formData = $("#SendMail").serialize();

		$.ajax({
			type: "POST",
			url: "http://www.laziness.co.kr/sendmail.jsp",
			data: formData,
			success: function (msg) {
				alert("메일을 발송하였습니다.");
			},
			error: function (request, status, error) {
				alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
			}
		});
	});

	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		mousewheelControl: true,
		effect: 'fade',
		onSlideChangeStart: function () {

			$(".mainContainer").stop().velocity({ opacity: '0', marginTop: '0px' }, 0);

			if (swiper.activeIndex == 2) {
				chart();
			} else {
				var countskill = $(".count");

				$(".animbar").removeAttr("style");
				countskill.removeAttr("style");
				countskill.remove();
			};
		},
		onSlideChangeEnd: function (swiper) {
			$(".mainContainer").stop().velocity({ opacity: '1', marginTop: '-150px' }, 600);
		}
	});


	$('a[data-slide-index]').on('click', function () {
		swiper.slideTo($(this).attr('data-slide-index'));
	});

});
