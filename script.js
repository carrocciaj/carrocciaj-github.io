
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
topContainer = document.getElementById("top-container")

function aboutMeSlide() {
  aboutMe.classList.remove("hide");
  footer.classList.remove("hide");
  aboutMe.classList.add("onload-slideLeft");
  projects.classList.add("hide");
  topContainer.classList.add("hide");
}

function projectsSlide() {
  projects.classList.remove("hide");
  footer.classList.remove("hide");
  projects.classList.add("onload-slideRight");
  aboutMe.classList.add("hide");
  topContainer.classList.add("hide");
}

function contactsSlide() {
  topContainer.classList.remove("hide");
  footer.classList.add("hide");
  topContainer.classList.add("onload-slideRight");
  aboutMe.classList.add("hide");
  projects.classList.add("hide");
}