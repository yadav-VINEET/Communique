$(document).ready(function()
{
  $(".costumer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      setting: {
        slidesToShow: 4
      },
      breakpoint: 540,
      setting: {
        slidesToShow: 3
      }
    }]
  })
})


// $(document).ready(function(){
//   $("p").hover(function(){
//     $(".createJob").css("background-color", "yellow");
//     $(".createJob").css("color","white");
//
//     }, function(){
//     $(".createJob").css("background-color", "white");
//     $(".createJob").css("color","violet");
//
//   });
// });



//changing background color of CREATE JOB ALERT button

function changeTo(x) {
  x.style.backgroundColor="black";
  x.style.color="white";
}

function changeBack(x) {
  x.style.backgroundColor="white";
  x.style.color="#4a2189";
}

