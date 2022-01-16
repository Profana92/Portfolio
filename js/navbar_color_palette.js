const dark = document.querySelector(".colorbox--dark");
const night = document.querySelector(".colorbox--night");
const light = document.querySelector(".colorbox--light");
const sidebar = document.querySelector(".sidebar");

dark.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--dark";
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--night";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar colorbox--light";
});
