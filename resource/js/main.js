$(function(){

	//main visual
	var visualSwiper = new Swiper('.ma_visual .swiper-container',{
		effect : 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		speed: 1000,
		loop : true,
		navigation: {
			nextEl: '.ma_visual .swiper-button-next',
			prevEl: '.ma_visual .swiper-button-prev',
		},
		pagination: {
			el: '.ma_visual .swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return '<span class="current">0' + current + '</span><span class="line">/</span><span class="total">0' + total + '</span>';
			}
		},
		on: {
			init: function(swiper){
				//자동play 켜고닫기
				$('.ma_visual .ctrl_box .btn_stop_play').click(function(){
					if($(this).hasClass('stop'))
					{
						visualSwiper.autoplay.start();
					}
					else
					{
						visualSwiper.autoplay.stop();
					}
				});
			},
			autoplayStart:function(){
				$('.ma_visual .ctrl_box .btn_stop_play').removeClass('stop');
			},
			autoplayStop:function(){
				$('.ma_visual .ctrl_box .btn_stop_play').addClass('stop');
			}
		},
	});


});
