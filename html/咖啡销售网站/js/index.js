$(function () {
  $("#a1").click(function () {
    $("#template1").addClass("d-none");
    $(".right").addClass("d-none d-lg-block");
    $("#template2").removeClass("d-none");
  })
  $("#a2").click(function () {
    $("#template2").addClass("d-none");
    $(".right").removeClass("d-none d-lg-block");
    $("#template1").removeClass("d-none");
  })


  var nowIndex = 0;
  var liNumber = $("#ulList li").length;

  function change(index) {
    var ulMove = index * 300;
    $("#ulList").animate({left: "-" + ulMove + "px"}, 500);
  }

  $("#left").click(function () {

    nowIndex = (nowIndex > 0) ? (--nowIndex) : 0;
    change(nowIndex)
  })
  $("#right").click(function () {
    debugger;
    nowIndex = (nowIndex < liNumber - 1) ? (++nowIndex) : (liNumber - 1);
    change(nowIndex);
  })


  $("#footer ul li").click(function(){
    $(this).find("a").addClass("ab");
    $(this).siblings().find("a").remove("ab");
  })





})
