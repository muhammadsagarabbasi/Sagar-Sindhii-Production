const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});




const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
navbar.classList.toggle("active");

if (menuBtn.classList.contains("active")) {
  menuBtn.classList.remove("active");
  menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
} else {
  menuBtn.classList.add("active");
  menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}
});

document.querySelectorAll(".navbar a").forEach(link => {
link.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuBtn.classList.remove("active");
  menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
});
});
