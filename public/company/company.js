let quill = new Quill('.ql-goal',{theme:'snow'})
$('.btn-add-description').on('click',function(){
    $('.description-quill').toggle();
    $('.description-content').empty();
})
$('.btn-save-description').on('click',function(){
    $('.description-quill').toggle();
    $('.description-content').append(quill.root.innerHTML);
})