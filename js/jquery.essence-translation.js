;(function($) {

  // Functions
  function is_empty(data){
    if(data == '' || data == 'undefined' || data == null){
      return true;
    }
    else{
      return false;
    }
  }
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

  // Plugin
  $.fn.essence_translation = function() {
    var lang = essence_check_language();
    $(this).each(function(i,elem){
      var lc_text = $(elem).data("lng-" + lang);
      if(!is_empty(lc_text)){$(elem).html(lc_text);}
    });
  };
})(jQuery);
