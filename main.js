// Simple mobile nav toggle only
(function () {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("show");
  });
})();
