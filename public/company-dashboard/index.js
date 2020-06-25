$(document).ready(function () {
  $(document).on("click", ".btn-post", function () {
    $.ajax({
      url: "/api/news",
      type: "POST",
      data: $("#submit").serializeArray(),
      success: function (responseData, textStatus, jqXHR) {
        alert("Post thành công");
        window.location.href = "/";
      },
    });
  });
});
