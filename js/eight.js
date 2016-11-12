function navbar(){
  $(".navbar").on('click','button#navbar-toggle', function(event) {
    $(this).next("nav").slideToggle(150);
  });
}

function dropdown_menu(){
  var check_dropdown = "off";
  var ul_ele;
  $(".dropdown-menu").on('click','.label', function(event) {
    var dd_height = $(this).parent().height();
    var dd_height2 = dd_height / 2;
    var label_height = $(this).height();
    var dd_height3 = dd_height2 + label_height;
    ul_elem = $(this).next("ul");
    $(ul_elem).css('top',dd_height3 + "px");
    // Down
    $(ul_elem).slideDown(100);
    $(".overlay").show();
    check_dropdown = "on";
  });

  $('.overlay').on('click', function() {
    if(check_dropdown == "on"){
      $(".overlay").hide();
      $(ul_elem).slideUp(50);
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

$(document).ready(function() {
  navbar();
  main_margin_fixnavbar();
  billboard_subtract_fixnavbar();
  dropdown_menu();
});
