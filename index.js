document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const main = document.querySelector(".mt-0");

  navbarToggler.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      main.style.marginTop = "4rem";
    } else {
      main.style.marginTop = `${navbarCollapse.offsetHeight + 64}px`;
    }
  });
});