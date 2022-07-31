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

$(document).ready(function(){
  document.querySelector(".createJob").hover(function(){
    $(".createJob").css("background-color", "black");
    $(".createJob").css("color","white");

    }, function(){
    $(".createJob").css("background-color", "white");
    $(".createJob").css("color","#5d4da8");

  });
});
