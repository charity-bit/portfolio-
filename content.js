var showMenu = document.getElementById("show-hide");
var nav = document.querySelector("nav");
const hideMenu = document.getElementById("hide-menu");

showMenu.addEventListener("click", () => {
  nav.classList.toggle("showitems");
});


hideMenu.addEventListener("click", () => {
    nav.classList.toggle("showitems");
  });
  


