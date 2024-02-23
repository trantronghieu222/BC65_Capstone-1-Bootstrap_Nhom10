/* Thêm class darkMode vào body */
function handleDarkNight() {
  document.getElementById("myBody").classList.toggle("darkMode");
}
/* Cuộn Header */
window.onscroll = function () { myFunction() };
var header = document.getElementById("header__main");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
}