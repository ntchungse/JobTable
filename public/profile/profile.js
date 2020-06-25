$(document).ready(function(){
    $(document).on("click", ".btn-post", function () {
        $.ajax({
          url: "/api/jobseeker/"+$(".form").attr('id'),
          type: "POST",
          data: $(".form").serializeArray(),
          success: function (data) {
            window.location.href = '/jobseeker/profile'
            window.location.reload();
          },
        });
      });
})


let quill = new Quill('.ql-goal',{theme:'snow'})
$('.btn-add-goal').on('click',function(){
    $('.description-goal').toggle();
    $('.content-goal').empty();
})
$('.btn-save-goal').on('click',function(){
    $('.description-goal').toggle();
    $('.content-goal').append(quill.root.innerHTML);
})
