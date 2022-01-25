//variables declaration

const dark = document.querySelector(".colorbox--dark");
const blue = document.querySelector(".colorbox--blue");
const green = document.querySelector(".colorbox--green");
const red = document.querySelector(".colorbox--red");
const light = document.querySelector(".colorbox--light");
const navi = document.getElementById("navigation");
const sidebarCenter = document.querySelector(".sidebar__center");
const overlay_content_arr = document.getElementsByClassName("overlay-content");
const mediaQuery = window.matchMedia("(min-width: 768px)");
const navLink = document.querySelectorAll("a.nav__link");

// event listeners
blue.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-blue)";
  toDark();
  blue.style.border = "1px solid #000";
});

dark.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-dark)";
  toWhite();
  dark.style.border = "1px solid #fff";
});
green.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-green)";
  toWhite();
  green.style.border = "1px solid #fff";
});

red.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-red)";
  toWhite();
  red.style.border = "1px solid #fff";
});

light.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-light)";
  toDark();
  light.style.border = "1px solid #000";
});

// Functions - Timeout

setTimeout(function () {
  if (mediaQuery.matches) {
    document.body.style.marginLeft = "250px";
    document.getElementById("navigation").style.width = "250px";
  }
}, 450);

// Functions - General

function openNav() {
  if (mediaQuery.matches) {
    setTimeout(function () {
      document.body.style.marginLeft = "250px";
    }, 450);
    document.getElementById("navigation").style.width = "250px";
  } else {
    setTimeout(function () {
      document.body.style.overflow = "hidden";
    }, 500);
    document.getElementById("navigation").style.width = "100%";
  }
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
  document.body.style.marginLeft = "0px";
  document.body.style.overflow = "visible";
}
function borderReset() {
  dark.style.border = "1px solid #9ca3af";
  blue.style.border = "1px solid #9ca3af";
  red.style.border = "1px solid #9ca3af";
  green.style.border = "1px solid #9ca3af";
  light.style.border = "1px solid #9ca3af";
}

function toWhite() {
  borderReset();
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
  sidebarCenter.style.borderTop = "1px solid white";
  sidebarCenter.style.borderBottom = "1px solid white";
  for (let index = 0; index < navLink.length; index++) {
    navLink[index].style.color = "white";
  }
}

function toDark() {
  borderReset();
  overlay_content_arr[0].classList.add("content--text-dark");
  overlay_content_arr[0].classList.remove("content--text-white");
  sidebarCenter.style.borderTop = "1px solid black";
  sidebarCenter.style.borderBottom = "1px solid black";
  for (let index = 0; index < navLink.length; index++) {
    navLink[index].style.color = "black";
  }
}
