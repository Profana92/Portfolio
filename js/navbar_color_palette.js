const dark = document.querySelector(".colorbox--dark");
const blue = document.querySelector(".colorbox--blue");
const green = document.querySelector(".colorbox--green");
const red = document.querySelector(".colorbox--red");
const light = document.querySelector(".colorbox--light");
const navi = document.getElementById("navigation");
const overlay_content_arr = document.getElementsByClassName("overlay-content");
blue.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-blue)";
  borderReset();
  blue.style.border = "1px solid #fff";
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
});

dark.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-dark)";
  borderReset();
  dark.style.border = "1px solid #fff";
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
});
green.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-green)";
  borderReset();
  green.style.border = "1px solid #fff";
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
});

red.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-red)";
  borderReset();
  red.style.border = "1px solid #fff";
  overlay_content_arr[0].classList.remove("content--text-dark");
  overlay_content_arr[0].classList.add("content--text-white");
});

light.addEventListener("click", () => {
  navi.style.backgroundColor = "var(--color-light)";
  borderReset();
  light.style.border = "1px solid #000";
  overlay_content_arr[0].classList.remove("content--text-white");
  overlay_content_arr[0].classList.add("content--text-dark");
  //document.getElementsByClassName("sidebar_center")[0].border-top = "1px solid var(--color-dark)";
  // document.getElementsByClassName("sidebar_center")[0].border-bottom = "1px solid var(--color-dark)";
});

function borderReset() {
  dark.style.border = "1px solid #9ca3af";
  blue.style.border = "1px solid #9ca3af";
  red.style.border = "1px solid #9ca3af";
  green.style.border = "1px solid #9ca3af";
  light.style.border = "1px solid #9ca3af";
}

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}
