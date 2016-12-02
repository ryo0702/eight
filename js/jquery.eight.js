;(function($) {

  function loader(){
    $(".loader").show();
    $(window).load(function () {
      $(".loader").fadeOut(100);
    });
  }

  function navbar(){
    $(".navbar").on('click','button#navbar-toggle', function(event) {
      $(this).next("nav").slideToggle(150);
    });
    var display = $('.navbar button.toggle').css('display');
    if(display == 'none'){
      $('.navbar nav > ul > li > ul').parent('li').children("a").prepend("<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> ");
      $('.navbar nav > ul > li').on('hover',function(){
        $(this).children("ul").slideToggle(80);
      },function () {
        $(this).children("ul").slideToggle(80);
      });
    }
  }

  function smoothscroll(){
    var offsetY = -0;
    var time = 500;
    $('a[href^=#]').click(function() {
      var target = $(this.hash);
      if (!target.length) return ;
      var targetY = target.offset().top+offsetY;
      $('html,body').animate({scrollTop: targetY}, time);
      window.history.pushState(null, null, this.hash);
      return false;
    });
  }

  function billboard_animation_fade(){
    // Setting
    $(".billboard-animation-fade .billboard-bgi").eq(0).show();

    var set_img = '.billboard-animation-fade';
    var fadeSpeed = 800;
    var switchDelay = 5500;

    $(set_img).children('.billboard-bgi').css({opacity:'0'});
    $(set_img).children('.billboard-bgi:first').css({opacity:'1'});

    setInterval(function(){
        $(set_img + ' .billboard-bgi:first').animate({opacity:'0'},fadeSpeed).next('.billboard-bgi').animate({opacity:'1'},fadeSpeed).end().appendTo(set_img);
    },switchDelay);
  }

  function dropdown_menu(){
    function menu_down(ul_elem){
      $(ul_elem).slideDown(100);
      $(".overlay").show();
    }
    function menu_up(ul_elem){
      $(".overlay").hide();
      $(ul_elem).slideUp(50);
    }
    var check_dropdown = "off";
    var ul_ele;
    var click_elem;
    $(".dropdown-menu").on('click','.label', function(event) {
      click_elem = this;
      if(check_dropdown == 'off'){
        var dd_height = $(this).parent().height();
        var dd_width = $(this).parent().width();
        var dd_height2 = dd_height / 2;
        var label_height = $(this).height();
        var dd_height3 = dd_height2 + label_height;
        ul_elem = $(this).next("ul");
        var ul_elem_width = $(ul_elem).width();
        var ul_elem_width2 = ul_elem_width / 2;
        var dd_width2 = dd_width / 2;
        var dd_width3 = dd_width2 - ul_elem_width2;
        $(ul_elem).css('top',dd_height3 + "px");
        $(ul_elem).css('left',dd_width3 + "px");
        menu_down(ul_elem);
        $(click_elem).children("i").addClass('rotate180');
        check_dropdown = "on";
      }
      else{
        menu_up(ul_elem);
        $(click_elem).children("i").removeClass('rotate180');
        check_dropdown = "off";
      }
    });
    $('.overlay').on('click', function() {
      if(check_dropdown == "on"){
        menu_up(ul_elem);
        $(ul_elem).children("i").addClass('rotate180');
        $(click_elem).children("i").removeClass('rotate180');
        check_dropdown = "off";
      }
    });
  }

  function main_margin_fixnavbar() {
    var nav_height = $(".navbar").height();
    $("main").css('margin-top',nav_height);
  }

  function billboard_subtract_fixnavbar() {
    var nav_height = $(".navbar").height();
    var billboard_height = $(".billboard_subtract_fixnavbar").height();
    var set_height = billboard_height - nav_height;
    $(".billboard_subtract_fixnavbar").height(set_height);
    $(".billboard_subtract_fixnavbar").css('margin-top',nav_height);
  }

  function escape_html_code(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function codes(){
    $("code,.code").each(function(i,elem){
      var code_html = $(elem).html();
      var escape_html = escape_html_code(code_html);
      $(elem).html(escape_html);
    });
  }

  $.fn.eight = function() {
    navbar();
    loader();
    main_margin_fixnavbar();
    billboard_subtract_fixnavbar();
    dropdown_menu();
    billboard_animation_fade();
    smoothscroll();
  };
})(jQuery);
