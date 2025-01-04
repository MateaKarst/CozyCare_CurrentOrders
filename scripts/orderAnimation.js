function applyHoverAnimation(element) {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: +10,
        duration: 0.3,
        ease: "power2.out",
        border: "4px solid #1D2E36",
      });
    });
  
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        border: "none",
      });
    });
  }
  
  const one = document.querySelector(".one");
  applyHoverAnimation(one);
  
  const two = document.querySelector(".two");
  applyHoverAnimation(two);
  