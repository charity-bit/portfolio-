const theme = document.querySelector(".theme");
// const socialIcons = document.querySelectorAll(".socials a ion-icon");
// const navLinks  = document.querySelectorAll(".nav-link a");
// const Inputs = document.querySelectorAll(".inputs");
const itemList = document.getElementsByClassName(".inputs");

const items = document.querySelectorAll(".section__title");
const navLinks = document.querySelectorAll(".navi");
const inputs = document.querySelectorAll(".fnames p,.message p,.email p");

console.log(navLinks);
theme.addEventListener("click", () => {
  //for  body background color
  inputs.forEach((inputitem) => {
    inputitem.classList.toggle("light");
    document.body.classList.toggle("bodybg");
  });

  //nav icons
  socialIcons.forEach((icon) => {
    icon.classList.toggle("light");
  });

  items.forEach((item) => {
    item.classList.toggle("light");
    theme.classList.toggle("light");
  });

  navLinks.forEach((link) => {
    link.classList.toggle("light");
  });
});
