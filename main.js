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
  if (!header) return;
  const setHeaderState = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
})();
