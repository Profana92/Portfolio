const dark = document.querySelector(".colorbox--dark");
const blue = document.querySelector(".colorbox--blue");
const green = document.querySelector(".colorbox--green");
const red = document.querySelector(".colorbox--red");
const light = document.querySelector(".colorbox--light");
const navi = document.getElementById("navigation");
const sidebarCenter = document.querySelector(".sidebar__center");
const overlay_content_arr = document.getElementsByClassName("overlay-content");

blue.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-blue)";
  borderBoxReset();
  blue.style.border = "1px solid #fff";
  textResetToWhite();
  borderToWhite();
});

dark.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-dark)";
  borderBoxReset();
  dark.style.border = "1px solid #fff";
  textResetToWhite();
  borderToWhite();
});
green.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-green)";
  borderBoxReset();
  green.style.border = "1px solid #fff";
  textResetToWhite();
  borderToWhite();
});

red.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-red)";
  borderBoxReset();
  red.style.border = "1px solid #fff";
  textResetToWhite();
  borderToWhite();
});

light.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-light)";
  borderBoxReset();
  borderToBlack();
  light.style.border = "1px solid #000";
  textResetToDark();
});

// Funkcje

function borderBoxReset() {
  dark.style.border = "1px solid #9ca3af";
  blue.style.border = "1px solid #9ca3af";
  red.style.border = "1px solid #9ca3af";
  green.style.border = "1px solid #9ca3af";
  light.style.border = "1px solid #9ca3af";
}
function borderToBlack() {
  sidebarCenter.style.borderTop = "1px solid black";
  sidebarCenter.style.borderBottom = "1px solid black";
}
function borderToWhite() {
  sidebarCenter.style.borderTop = "1px solid white";
  sidebarCenter.style.borderBottom = "1px solid white";
}
function textResetToDark() {
  overlay_content_arr[0].classList.remove("content--text-white");
  overlay_content_arr[0].classList.add("content--text-dark");
}

function textResetToWhite() {
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
}

function openNav() {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
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
