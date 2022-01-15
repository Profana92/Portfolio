window.onload = load;

function load() {
  const preloader = document.querySelector("#loader");
  console.log(preloader);
  preloader.className = "loader--inactive";
}
