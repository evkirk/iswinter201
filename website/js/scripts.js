/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
window.addEventListener("DOMContentLoaded", function () {
  if (!document.body) return;

  var backToTopBtn = document.createElement("button");
  backToTopBtn.type = "button";
  backToTopBtn.className = "back-to-top-btn";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  backToTopBtn.textContent = "Back to top";

  function toggleBackToTopVisibility() {
    if (window.scrollY > 220) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(backToTopBtn);
  window.addEventListener("scroll", toggleBackToTopVisibility, { passive: true });
  toggleBackToTopVisibility();
});
