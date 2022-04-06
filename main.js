
var scrollButton = document.querySelector(".arrowUp");
// window.onscroll = scrollFunction();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('scroll', function (event) {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
