$(document).ready(function () {
  $(document).on("click", ".location-icon", function () {
    $(".dropdown-location").toggleClass("active-fun");
  });
  search();
  searchBar();
  getNews();
});

function searchBar() {
  $("ul.dropdown-location").on("click", "li:not(.selected)", function () {
    $("ul.dropdown-location").children().removeClass("selected");
    $(this).addClass("selected");
    $(".text").html($(this).html());
    $(".dropdown-location").removeClass("active-fun");
  });
}
function search() {
  $(document).on("click", "#search-button", getData);
  function getData() {
    let _titleField = $("#titleField").val();
    let _locationField = $("#locationField span").text();
    $.ajax({
      url: "/api/news",
      method: "GET",
      dataType: "json",
      success: function (data) {
        let content = "";
        if(_locationField==="Bất kỳ"){
          for(let i = 0 ; i<data.length;i++){
            content +=
                `<div class="grid-item">
                     <div class="top">
                         <div class="avatar">
                             <img src="`+data[i].avt+`" alt="">
                         </div>
                         <div class="infor">
                         <p>`+data[i].title+`</p>
                             <p class="company">`+data[i].companyName+`</p>
                         </div>
                         <div class="love">
                             <div role="button" style="width: 50px;height: 50px;">
                                 <i class="far fa-heart text-danger fa-2x"></i>
                             </div>
                         </div>
                     </div>
                     <div class="bot">
                         <div class="salary">`+data[i].salary.currency+` `+data[i].salary.min+` - `+data[i].salary.max+`</div>
                         <div class="location">
                             <i class="fas fa-map-marker-alt"></i>
                             <span>` +
                data[i].location +
                `</span>
                         </div>
                     </div>
                 </div>`;
          }
        }
        else{
          for (let i = 0; i < data.length; i++) {
            if (
              data[i].location === _locationField &&
              data[i].title === _titleField
            ) {
              content +=
                `<div class="grid-item id="`+data[i]._id+`">
                     <div class="top">
                         <div class="avatar">
                             <img src="`+data[i].avt+`" alt="">
                         </div>
                         <div class="infor">
                         <p>`+data[i].title+`</p>
                             <p class="company">`+data[i].companyName+`</p>
                         </div>
                         <div class="love">
                             <div role="button" style="width: 50px;height: 50px;">
                                 <i class="far fa-heart text-danger fa-2x"></i>
                             </div>
                         </div>
                     </div>
                     <div class="bot">
                         <div class="salary">`+data[i].salary.currency+` `+data[i].salary.min+` - `+data[i].salary.max+`</div>
                         <div class="location">
                             <i class="fas fa-map-marker-alt"></i>
                             <span>` +
                data[i].location +
                `</span>
                         </div>
                     </div>
                 </div>`;
            }
          }
        }
        
        if(content===""){
          content += `<br><div>
          <img src="./images/nothing-to-found.png" alt="">
          <h2 style="margin-top:10px">Nothing to Found</h2>
          </div>`;
        }
        $("#result").css({"margin":"200px 0 0","padding":" 10% 5%"});
        $("#hot-job").css({"margin":"0"});
        $("#result").html(content);
      },
    });
  }
}
function getNews() {
  let content = "<h1>Một số công việc tiêu biểu</h1>";
  let count = 0;
  $.getJSON("/api/news", function (data) {
    $.each(data, function (i, field) {
      content +=
          `<div class="grid-item">
        <div class="top">
            <div class="avatar">
                <img src="`+field.avt+`" alt="">
            </div>
            <div class="infor">
            <p>`+field.title+`</p>
                <p class="company">`+field.companyName+`</p>
            </div>
            <div class="love">
                <div role="button" style="width: 50px;height: 50px;">
                    <i class="far fa-heart text-danger fa-2x"></i>
                </div>
            </div>
        </div>
        <div class="bot">
            <div class="salary">`+field.salary.currency+` `+field.salary.min+` - `+field.salary.max+`</div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <span>` +
          field.location +
          `</span>
            </div>
        </div>
    </div>`;
      });
    $("#hot-job").html(content);
  });
}
