$(document).ready(function(){
    $(".preloader").fadeOut();
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo-img").style.height="40%";
    document.getElementById("logo-img").style.width="40%";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo-img").style.height="100%";
    document.getElementById("logo-img").style.width="100%";
  }
}