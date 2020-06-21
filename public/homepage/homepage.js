$(document).ready(function () {
    $(document).on("click", ".location-icon", function () {
      $(".dropdown-location").toggleClass("active-fun");
    });
  });
  
  $("ul.dropdown-location").on("click","li:not(.selected)", function () {
    $("ul.dropdown-location").children().removeClass("selected");
    $(this).addClass("selected");
    $(".text").html($(this).html());
    $(".dropdown-location").removeClass("active-fun");
  });
  