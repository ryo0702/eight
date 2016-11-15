;(function($) {

  function check_forms(this_form){
    var check_vali = "";
    $(this_form).find(".submit").prop("disabled", true);
    $.each($(this_form).find(".req"),function(i, val_elem) {
      var inp_val;
      var inp_title;
      inp_title = $(val_elem).find('legend').text();
      $(val_elem).find(".inp").removeClass("vali-check-danger");
      $(val_elem).find(".inp").removeClass("vali-check-success");
      inp_val = $(val_elem).find(".inp input,.inp select").val();
      if(inp_val == "" || inp_val == null || inp_val == "undefined"){
        $(val_elem).find(".inp").addClass("vali-check-danger");
        check_vali = "off";
      }
      else{
        $(val_elem).find(".inp").addClass("vali-check-success");
      }
    });
    if(check_vali == "off"){
      $(this_form).find(".submit").prop("disabled", true);
      $(this_form).find(".message-error").show();
    }
    else{
      $(this_form).find(".submit").prop("disabled", false);
      $(this_form).find(".message-error").hide();
    }
  }

  // Plugin
  $.fn.essence_validation = function() {
    var this_form = this;
    check_forms(this_form);
    $(this_form).find("input,select").on('change', function() {
      check_forms(this_form);
    });
  };
})(jQuery);
