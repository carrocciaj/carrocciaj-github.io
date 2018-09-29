
// window.onscroll = function() {stickyHeader()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function stickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

var aboutMe = document.getElementById("about")
var projects = document.getElementById("projects")
var footer = document.getElementById("contact")
function aboutMeSlide() {
  aboutMe.classList.remove("hide");
  footer.classList.remove("hide");
  aboutMe.classList.add("onload-slide");
  projects.classList.add("hide");
}

function projectsSlide() {
  projects.classList.remove("hide");
  footer.classList.remove("hide");
  projects.classList.add("onload-slide");
  aboutMe.classList.add("hide");
}