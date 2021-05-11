$( function () {

  var $menu      = $( '.menu > li' );                 //1차메뉴
  var $sub      = $( '.sub' );                      //2차메뉴
  var headerMin = $( 'header' ).height();      //1차메뉴 높이(30px)
  var headerMax = nav + $sub.innerHeight();   //1차 + 2차메뉴 높이
  var speed     = 200;                              //시간(ms)
  var flag      = false;                            //메뉴상태
  var nav = $('nav').height();

  // 2차메뉴 숨기기
  $sub.hide();
  
  // 1차메뉴에 마우스 커서가 들어가면 풀다운
  $menu.mouseenter( function () {

    if ( !flag ) { //열리지않고 닫힌상태라면
      $( 'nav' ).stop().animate( {
        height: headerMax
      }, speed, function () {
        $sub.stop().fadeIn( speed );
      } );
      flag = true; //메뉴상태가 펼쳐져있는걸로 바꾼당~

    }

    // 1차메뉴에 .on 부여
    $( this ).find( 'a' ).addClass( 'on' ); 
    //현재 선택된 1차메뉴에서 a태그 찾아서 on클래스 붙여

    // 2차메뉴에 .on 부여
    $( this ).find( 'ul' ).addClass( 'on' );
    //현재 선택된 1차메뉴에서 ul태그 찾아서 on클래스 붙여
    
  } );

  // 1차메뉴에서 마우스 커서가 나가면 풀업
  $menu.mouseleave( function () {

    // 1차메뉴에서 .on 제거
    $( this ).find( 'a' ).removeClass( 'on' );

    // 2차메뉴에서 .on 제거
    $( this ).find( 'ul' ).removeClass( 'on' );
  } );
  // 헤더 영역에서 마우스 커서가 나가면 2차메뉴 닫기
  $( 'nav' ).mouseleave( function () {
    $sub.stop().fadeOut( speed, function () {
      $( 'nav' ).stop().animate( { height: nav }, speed );
    } );
    flag = false;
  } );
  
} );