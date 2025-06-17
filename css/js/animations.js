// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});

// Counter animation
const counterElements = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-count"));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            entry.target.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = target;
          }
        };

        updateCounter();
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

counterElements.forEach((element) => {
  counterObserver.observe(element);
}); 