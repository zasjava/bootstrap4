window.onload = function () {
  var oDiv = document.getElementById("div1");
  var oUl = document.getElementById("ul1");
  var speed = 2;
  oUl.innerHTML += oUl.innerHTML;
  var oLi = document.getElementsByTagName("li");
  oUl.style.width = oLi.length * 160 + 'px';
  var oBtn1 = document.getElementById("btn1");
  var oBtn2 = document.getElementById("btn2");

  function move() {
    if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) {
      oUl.style.left = "0px";

    }
    if (oUl.offsetLeft > 0) {
      oUl.style.left = -(oUl.offsetWidth / 2) + 'px';
    }
    oUl.style.left = oUl.offsetLeft +speed+ 'px';
  }

  oBtn1.addEventListener("click", function () {
    speed = -2;

  }, false);

  oBtn2.addEventListener("click", function () {
    speed = 2;

  }, false);
  var timer = setInterval(move, 30);
}
