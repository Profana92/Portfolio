// const dark = document.querySelector(".colorbox--dark");
// const night = document.querySelector(".colorbox--night");
// const light = document.querySelector(".colorbox--light");
// const sidebarText = document.getElementsByClassName("sidebar__center__list__item__text");
// const sidebarTopEl = document.querySelector(".sidebar__top__paragraph");
// const sidebarTopElText = document.querySelector(".sidebar__top__paragraph--small");
// const sidebarTopImg = document.querySelector(".sidebar__top__faceimg");
// const sidebar = document.getElementById("sidebarid");
// const menuMobile = document.querySelector(".menu_mobile");
// menuMobile.addEventListener("click", () => {
//   console.log(sidebar.className == "sidebar");

//   switch (sidebar.className == "sidebar") {
//     case true:
//       sidebarTopElText.className = "hidden";
//       sidebarTopImg.className = "sidebar__top__faceimg--small";
//       sidebarTopEl.className = "hidden";
//       sidebar.className = "sidebar--minimized";
//       for (let i = 0; i < sidebarText.length; i + 1) {
//         sidebarText[i].className = "hidden";
//       }
//       break;
//     case false:
//       sidebar.classList.add("sidebar");
//       sidebar.classList.remove("sidebars");
//       console.log("niezle2");
//       break;
//   }
//   event.preventDefault();
// });

// function hide() {
//   sidebarTopElText.className = "hidden";
//   sidebarTopImg.className = "sidebar__top__faceimg--small";
//   sidebarTopEl.className = "hidden";
//   sidebar.className = "sidebar--minimized";
//   for (let i = 0; i < sidebarText.length; i + 1) {
//     sidebarText[i].className = "hidden";
//   }
// }

const sidebar = document.getElementById("sidebarId");
const menuMobile = document.querySelector(".menu_mobile");
console.log(sidebar);
console.log(menuMobile);

menuMobile.addEventListener("click", () => {
  switch (sidebar.className == "sidebar") {
    case true:
      sidebar.className = "sidebar--inactive ";
      break;
    case false:
      sidebar.className = "sidebar";
      break;
  }
  event.preventDefault();
});

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}
