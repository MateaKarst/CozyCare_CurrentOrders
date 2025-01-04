const logo = document.querySelector(".logo img");

logo.addEventListener("mouseenter", () => {
  gsap.to(logo, {
    x: -5,
    y: -5,
    duration: 0.3,
    ease: "power2.out",
  });
});

logo.addEventListener("mouseleave", () => {
  gsap.to(logo, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});
