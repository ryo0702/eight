function navbar(){
  $(".navbar").on('click','button#navbar-toggle', function(event) {
    $(this).next("nav").slideToggle(150);
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
  $("code").each(function(i,elem){
    var code_html = $(elem).html();
    var escape_html = escape_html_code(code_html);
    $(elem).html(escape_html);
  });
}

$(document).ready(function() {
  // Ui
  navbar();
  main_margin_fixnavbar();
  billboard_subtract_fixnavbar();
  codes();
});
