(function($){

  var gangwon={
    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header:function(){
          $('.main-btn').on({
            mouseenter: function(){
              $('.sub').stop().fadeOut(0);
              $(this).next().stop().fadeIn(300);
          
              $('.main-btn').removeClass('on');
              $(this).addClass('on');
            },
            focusin: function(){
              $('.sub').stop().fadeOut(0);
              $(this).next().stop().fadeIn(300);
          
              $('.main-btn').removeClass('on');
              $(this).addClass('on');
            }
          });
        
          $('#nav').on({
            mouseleave:function(){
              $('.sub').stop().fadeOut(300);
              $('.main-btn').removeClass('on');
            }
          });
    },
    section1:function(){
          let cnt=0;

          //  1. 메인슬라이드함수
          function mainSlide(){
            // console.log('페이드 아웃',cnt==0?2:cnt-1);
            // console.log('페이드 인',cnt);
            $('.slide').css({zIndex:1}).animate({opacity:1},0);
            $('.slide').eq(cnt).css({zIndex:2}).animate({opacity:1},0); 
            $('.slide').eq(cnt==0?2:cnt-1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},2000);
          }
          //  2. 다음카운트함수
          function nextCount(){
            cnt++;
            cnt>2?cnt=0:cnt;
            mainSlide();
          }
          //  3. 자동타이머함수
          function autoTimer(){
            setInterval(nextCount, 3000);
          }
          autoTimer();
    },
    section2:function(){
          $('.gallery-btn').on({
            click:function(){ // 마우스 클릭그리고 키보드는
            $('.notice-btn').addClass('on'); 
            $('.gallery-btn').addClass('on');
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');
            }
          });
        
          $('.notice-btn').on({
            click:function(){
              $('.notice-btn').removeClass('on');
              $('.gallery-btn').removeClass('on');
              $('.notice-box').removeClass('on');
              $('.gallery-box').removeClass('on');      
            }
          });
        
          // 레이어 팝업창
          $('.link-btn').on({
          click:function(){
              $('#modal').stop().fadeIn(300);
          } 
          });
        
          $('.close-btn').on({
            click:function(){
              $('#modal').stop().fadeOut(300);
            }
          });
    },

    footer:function(){}

  }
  gangwon.init();
  
})(jQuery);