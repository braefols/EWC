window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsById("topnav").style.height = "100px";
  } else {
    document.getElementsById("topnav").style.height = "150px";
  }
}
