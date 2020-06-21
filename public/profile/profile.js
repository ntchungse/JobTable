let quill = new Quill('.ql-goal',{theme:'snow'})
$('.btn-add-goal').on('click',function(){
    $('.description-goal').toggle();
    $('.content-goal').empty();
})
$('.btn-save-goal').on('click',function(){
    $('.description-goal').toggle();
    $('.content-goal').append(quill.root.innerHTML);
})