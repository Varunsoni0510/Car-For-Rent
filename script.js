var navbar = document.querySelector(".navbar");
var menu = document.querySelector(".menu-bar");
var flag = 0;

menu.addEventListener("click", function () {
  if (flag == 0) {
    navbar.style.left = 0;
    menu.innerHTML = '<i class="ri-close-line"></i>';
    flag = 1;
  } else {
    navbar.style.left = "-100%";
    menu.innerHTML = '<i class="ri-menu-line"></i>';
    flag = 0;
  }
});

// animation gsap

//page-1

var header = gsap.timeline();
header.from(".logo", {
  x: -200,
  delay: 0.5,
  duration: 1,
});

header.from(".navbar li", {
  y: -200,
  delay: 0.2,
  duration: 0.5,
  stagger: 0.3,
});

header.from(".header-button a", {
  x: 500,
  delay: 0.2,
  duration: 0.5,
  stagger: 0.3,
});

var home = gsap.timeline();

home.from(".text h1", {
  y: -200,
});

home.from(".text p ", {
  x: -700,
  delay: 0.5,
  duration: 1,
});
home.from(".app-stores ", {
  x: -700,
  delay: 0.1,
  duration: 0.5,
});

home.from(".form-section", {
  scale: 0,
  delay: 1,
  duration: 1,
});

//page-2

gsap.from(".box", {
  x: -1300,
  delay: 1,
  duration: 1,
  stagger: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    start: "top 75%",
    end: "top 40%",
    scrub: 2,
  },
});

//page-4

gsap.from(".about-image", {
  x: -600,
  delay: 1,
  duration: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-image",
    scroll: "body",
  },
});

gsap.from(".about-text", {
  scale: 0,
  delay: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about-image",
    scroll: "body",
  },
});

// page-5

gsap.from(".review-cards .review-card-box", {
  x: -1500,
  delay: 0.3,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".review-cards .review-card-box",
    scroll: "body",
  },
});
