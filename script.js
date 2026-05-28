// =========================
// MENU TOGGLE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});


// =========================
// ACTIVE NAVBAR ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});


// =========================
// ACTIVE SECTION LINKS
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }

  });

});


// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

},{
  threshold:0.15
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});


// =========================
// TYPING EFFECT
// =========================

const words = [
  "Frontend Developer",
  "UI Designer",
  "Web Developer",
  "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

  const currentWord = words[wordIndex];

  if(isDeleting){

    typingElement.textContent =
      currentWord.substring(0,charIndex--);

  }else{

    typingElement.textContent =
      currentWord.substring(0,charIndex++);

  }

  if(!isDeleting && charIndex === currentWord.length){

    isDeleting = true;

    setTimeout(typeEffect,1200);

    return;

  }

  if(isDeleting && charIndex === 0){

    isDeleting = false;

    wordIndex =
      (wordIndex + 1) % words.length;

  }

  setTimeout(typeEffect,isDeleting ? 60 : 120);

}

document.addEventListener(
  "DOMContentLoaded",
  typeEffect
);


// =========================
// THEME TOGGLE
// =========================

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    themeToggle.textContent = "☀️";

  }else{

    themeToggle.textContent = "🌙";

  }

});


/* =========================
   EMAILJS CONTACT FORM
========================= */

emailjs.init("davkC4o-L1ldDRIT2");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const button = form.querySelector("button");

  button.innerHTML = "Sending...";

  emailjs.sendForm(
    "service_k40jiin",
    "template_2e1j5c5",
    form
  )

  .then(function() {

    button.innerHTML = "Message Sent ✓";

    alert("Message sent successfully!");

    form.reset();

  })

  .catch(function(error) {

    console.log(error);

    button.innerHTML = "Send Message";

    alert("Message failed to send.");

  });

});


// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    },500);

  },800);

});