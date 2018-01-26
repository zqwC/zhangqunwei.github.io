$(document).ready(function() {


  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
    }

    
  });

  // if (window.location.hash && window.location.hash == "#blog") {
  //   $('.panel-cover').addClass('panel-cover--collapsed');
  //   $('.main-post-list').removeClass('hidden');
  // }

  // if (window.location.pathname.substring(0, 5) == "/tag/") {
  //   $('.panel-cover').addClass('panel-cover--collapsed');
  // }

  $('.btn-mobile-menu__icon').click(function() {
    // 导航按钮被点击
     this.style.backgroundColor = '#00f';// 设置颜色后会自动消失
  });  

  if($('.post img').alt == box1) {
    $('.post img').box-shadow(0,0,10);
  }
  if($('.post img').alt == box2) {
    $('.post img').box-shadow(0,0,20);
  }
  if($('.post img').alt == box3) {
    $('.post img').box-shadow(0,0,30);
  }
});