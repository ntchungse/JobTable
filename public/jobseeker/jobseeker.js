$('#options').on('click','.option',function(){
    $('#options').children().removeClass('active-option');
    $(this).addClass('active-option')
    if($(this).hasClass('pending')){
        $('#suggest-job').css('display','none');
        $('#love-job').css('display','none');
        $('#pending-job').css('display','grid');
    }
    else if($(this).hasClass('suggest')){
        $('#suggest-job').css('display','grid');
        $('#love-job').css('display','none');
        $('#pending-job').css('display','none');
    }else{
        $('#suggest-job').css('display','none');
        $('#love-job').css('display','grid');
        $('#pending-job').css('display','none');
    }
})