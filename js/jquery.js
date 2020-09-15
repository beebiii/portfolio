$(document).ready(function(){

  //포트폴리오 필터
  $(".filter a").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $(".work-box").hide();
    
    var category = $(this).attr("data-filter");
    if(category === "all") {
      $(".work-box").show();
    }
    else {
      $(".work-con li").each(function(){
        var category_check = $(this).attr("data-category");
        if(category === category_check) {
          $(this).css("display","block");
        }
      });
    };

    $(".work-con").css({marginLeft:0});
  });

  //포트폴리오 슬라이드
  var s = 0;
  var len_web = $(".work-con1 .work-box").length;
  var work_wid = $(".work-box").width();
  var wid_web = len_web * (work_wid + 20);
  
  $(".work-con1").css({width:wid_web});
  
  $(".btn-right").click(function(){
    if (s < (len_web-4)) {
      s++;
      var move = s * -(work_wid + 20);
      $(".work-con").stop().animate({marginLeft:move}, 300);
    } else {
      $(".work-con").stop().animate({marginLeft:0}, 300);
      s = 0;
    }
  });
  $(".btn-left").click(function(){
    if (s > 0) {
      s--;
      var move = s * -(work_wid);
      $(".work-con").stop().animate({marginLeft:move}, 300);
    } else {
      false
    }
  });
  
  //sidebox
  $('.menu-btn').click(function(){
    $(this).toggleClass('on');
    $('.about, .work').toggleClass('on');
  });

$(window).resize(function(){
    //width값 가져오기
    var width_size = window.outerWidth;
    $(".work-con").css({width:wid_web});
    
  });

  
}); 
