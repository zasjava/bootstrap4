

$(function () {
  $(".del").click(function () {
    $(".sidebar").animate({"left":"-200px"});
  })
  $(".show").click(function () {

    $(".sidebar").animate({"left":"0px"});
  })




  $(".del1").click(function () {
    $(".reg").animate({"top":"--100vh"});
    $(".reg").hide();
    $(".main").show();

  })
  $(".show1").click(function () {

    $(".reg").animate({"top":"0px"});
    $(".reg").show();
    $(".main").hide();
  })

})


