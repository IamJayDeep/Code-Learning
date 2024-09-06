const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  sidebar.classList.toggle("flex");
  sidebar.classList.toggle("hidden");
})