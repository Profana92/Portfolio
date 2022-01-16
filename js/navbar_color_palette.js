const dark = document.querySelector(".colorbox--dark");
const night = document.querySelector(".colorbox--night");
const light = document.querySelector(".colorbox--light");
const sidebar = document.querySelector(".sidebar");
const sidebarText = document.getElementsByClassName("sidebar__center__list__item__text");
const sidebarTopEl = document.querySelector(".sidebar__top__paragraph");
const sidebarTopElText = document.querySelector(".sidebar__top__paragraph--small");
const sidebarTopImg = document.querySelector(".sidebar__top__faceimg");

//const hide = document.querySelector(".colorbox--light");
dark.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--dark";
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--night";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--light";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar--minimized";
  hide();
});

function hide() {
  console.log(sidebarText);
  sidebarTopElText.className = "hidden";
  sidebarTopImg.className = "hidden";
  sidebarTopEl.className = "hidden";
  for (let i = 0; i < sidebarText.length; i + 1) {
    sidebarText[i].className = "hidden";
  }
}
