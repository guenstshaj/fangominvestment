// Menu mobile
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Animation au défilement
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message! Nous vous contacterons bientôt.");
  this.reset();
});
