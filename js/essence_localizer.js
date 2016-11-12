function essence_check_language(){
  var lang = "en";
  if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "ja") {lang = "ja";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "ar") {lang = "ar";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "it") {lang = "it";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "el") {lang = "el";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "ko") {lang = "ko";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "la") {lang = "la";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "ru") {lang = "ru";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "eo") {lang = "eo";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "ms") {lang = "ms";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "es") {lang = "es";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "fr") {lang = "fr";}
  else if((navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) === "zh") {lang = "zh";}
  else{lang = "en";}
  return lang;
}

function essence_localizer(lang,lib){
  $(".localizer").each(function(i,elem){
    var lca = $(elem).data("localizer");
    var veiw_text = lib[lca][lang];
    $(elem).html(veiw_text);
  });
}
