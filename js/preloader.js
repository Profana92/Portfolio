window.onload = load;

function load() {
  const preloader = document.querySelector("#loader-wrapper");
  console.log(preloader);
  preloader.className = "loader__wrapper--inactive";
}
