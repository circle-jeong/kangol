$( function () {
  

  var nav = $('header');
  var logo = $('.navLogo');
  var logoimg = $('.nli');

//상단바
  $(window).scroll( function () {
    if( $(this).scrollTop() > 160 ){
      nav.addClass('headerD');
      logoimg.attr('src','/img/kangol_logo_2.png');
      $('.menu > li > a').css('color', '#002946');
      $('.menu > li').css('top','-25px');
      $('.i1').attr('src','/img/kangol_icon_03.png');
      $('.i2').attr('src','/img/kangol_icon_01.png');
      $('.i3').attr('src','/img/kangol_icon_02.png');
      $('.mini > li').css('padding-top','10px');
      $('.mini > li img').css('width','25px');
    } else {
      nav.removeClass('headerD');
      logoimg.attr('src','/img/kangol_logo_1.png');
      $('.menu > li > a').css('color', '#fff');
      $('.menu > li').css('top','0');
      $('.i1').attr('src','/img/kangol_up_03.png');
      $('.i2').attr('src','/img/kangol_up_01.png');
      $('.i3').attr('src','/img/kangol_up_02.png');
      $('.mini > li').css('padding-top','35px');
      $('.mini > li img').css('width','30px');
    }
  } );
  

  //움직이는 텍스트
  $('.newtxt1').marquee({
    speed: 100,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });
  $('.newtxt2').marquee({
    speed: 100,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    pauseOnHover: true
  });

    //베스트셀러
    $('.bs li').click(function () {

      $('.bs li').removeClass();
      $(this).addClass('active');

      var i = $( this ).index();
      $('.bs_thum div').removeClass('on');
      $('.bs_thum div').eq(i).addClass('on');
      return false;
    } );

    $(".bsth a").click(function(){            //클릭 시
      var imgPath = $(this).attr("href");     //클릭한 a태그의 하이퍼링크를 변수저장
      $("#bsMainImg > img").attr('src', imgPath)   //메인 이미지의 주소 속성에 할당
      .hide()                                 //fadein()효과를 보여주기 위해 숨김처리
      .fadeIn();                              //fadeIn()
      return false;                           //<a> 의 본래기능 (하이퍼링크) 작동방지
  });




  //스크롤 이벤트
  AOS.init();
  } );
