function html_construction(route){
  $("#navbar").load(route + "parts/navbar.html");
  $("#sidebar").load(route + "parts/sidebar.html");
  $("#footer").load(route + "parts/footer.html");
}

function replace_url(route){
  if(route == ''){
    $('a.replace_url').each(function(i,elem){
      var href = $(this).attr('href');
      $(this).attr("href","document/" + href);
    });
  }
  else{
    $('a.replace_url_up').each(function(i,elem){
      var href = $(this).attr('href');
      $(this).attr("href","../"+href);
    });
  }
}
