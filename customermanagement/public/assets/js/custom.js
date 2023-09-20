{/* <div>
<script type="text/javascript">
const currentLocation=location. href;
const menuItem=document.querySelectorAll('a');
const menuLength = menuItem.length
for (Let i = 0; i<menuLength; i++){
if (menuItem[i].href==currentLocation){
menuItem[i].className"active"
}
}
</script>

$(document).ready(function(){
    $('.ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });

$(document).ready(function () {

activeLinkControl()
});

function activeLinkControl () {
    console.log("Hello2");
$('ul li a').click(function() {
//I remove active class from any of nav-item
$('li a').removeClass('active')
//add active class to clicked item but at Li not the anchor
$(this).addClass('active')
})
}
</div> */}

$(window).on("load", function() {

    var uri_arr = document.location.pathname.split("/");
  
    var file_name = uri_arr[uri_arr.length - 1];
  
  
  
    $(".menu-list a").each(function() {

      if ($(this).attr("href") == file_name) {
        $(this).addClass("active");
        
      }
  
    });
  
  });