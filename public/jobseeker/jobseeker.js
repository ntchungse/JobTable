$(document).ready(function(){
    getNews();
})
function getNews() {
    let content = "";
    $.getJSON("/api/news", function (data) {
      $.each(data, function (i, field) {
        content +=
          `<div class="grid-item id="`+data[i]._id+`">
        <div class="top">
            <div class="avatar">
                <img src="`+field.avt+`" alt="">
            </div>
            <div class="infor">
                <a class="job-title" href="/jobseeker/news/`+data[i]._id+`">` +
          field.title +
          `</a>
                <p class="company">`+field.companyName+`</p>
            </div>
            <div class="love">
                <div role="button" style="width: 50px;height: 50px;">
                    <i class="far fa-heart text-danger fa-2x"></i>
                </div>
            </div>
        </div>
        <div class="bot">
            <div class="salary">$4000 - 5000</div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <span>` +
          field.location +
          `</span>
            </div>
        </div>
    </div>`;
      });
      $("#suggest-job").html(content);
    });
  }
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