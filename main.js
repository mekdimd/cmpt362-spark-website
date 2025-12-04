// Simple mobile nav toggle only
(function () {
  // Mobile nav toggle
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("show");
    });
  }

  // Translucent navbar on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const setHeaderState = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  // Gallery Carousel
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (track && slides.length > 0 && prevBtn && nextBtn && dotsContainer) {
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let maxIndex = Math.max(0, slides.length - slidesPerView);

    function getSlidesPerView() {
      const width = window.innerWidth;
      if (width < 600) return 1;
      if (width < 900) return 2;
      return 3;
    }

    function getSlideWidth() {
      const slide = slides[0];
      const style = getComputedStyle(track);
      const gap = parseFloat(style.gap) || 24;
      return slide.offsetWidth + gap;
    }

    function updateCarousel() {
      const slideWidth = getSlideWidth();
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateDots();
    }

    function createDots() {
      dotsContainer.innerHTML = "";
      const numDots = maxIndex + 1;
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("button");
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => {
          currentIndex = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      updateCarousel();
    });

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        slidesPerView = getSlidesPerView();
        maxIndex = Math.max(0, slides.length - slidesPerView);
        currentIndex = Math.min(currentIndex, maxIndex);
        createDots();
        updateCarousel();
      }, 100);
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    track.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            currentIndex = Math.min(maxIndex, currentIndex + 1);
          } else {
            currentIndex = Math.max(0, currentIndex - 1);
          }
          updateCarousel();
        }
      },
      { passive: true }
    );

    createDots();
    updateCarousel();
  }
})();
