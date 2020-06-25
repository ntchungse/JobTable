
$(document).ready(function(){
    $(document).on("click", ".btn-post", function () {
        $.ajax({
          url: "/api/company/"+$(".form").attr('id'),
          type: "POST",
          data: $(".form").serializeArray(),
          success: function (data) {
            window.location.href = '/company'
            window.location.reload();
          },
        });
      });
  })
let quill = new Quill('.ql-goal',{theme:'snow'})
$('.btn-add-description').on('click',function(){
    $('.description-quill').toggle();
    $('.description-content').empty();
})
$('.btn-save-description').on('click',function(){
    $('.description-quill').toggle();
    $('.description-content').append(quill.root.innerHTML);
})