$(document).ready(function(){
  $(document).on("click", ".btn-submit", function () {
    $.ajax({
      url: "/api/news/"+$('.head').attr('id'),
      type: "POST",
      success: function (responseData, textStatus, jqXHR) {
        alert("Ứng tuyển thành công");
        window.location.href = "/jobseeker";
      },
    });
  });
});