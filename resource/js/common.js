$(function(){

	//PC GNB
	$('#gnb a').on('focus mouseenter',function(){
		$('.head_con_wrap').addClass("open");
	});

	//GNB영역 마우스 아웃
	$('.head_con_wrap').on('mouseleave', function(){
		$('.head_con_wrap').removeClass('open');

	});

	//모바일 카테고리 클릭
		$('.m_allmenu > ul > li > a').on('click', function(){
			$(this).toggleClass('on');
			$(this).next('.depth').stop(true,true).slideToggle(300);
		});

});


//모바일 전체메뉴
function toggleAllMenu(){
	$('body').toggleClass('openAllMenu');
}
