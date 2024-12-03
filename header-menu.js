document.addEventListener("DOMContentLoaded", () => {
  const headerMenu = document.querySelector(".Header__menu");
  const headerNav = document.querySelector(".Header-nav");
  const headerClose = document.querySelector(".Header__close");
  const headerModal = document.querySelector(".Header__modal");

  headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("Header__close");
    headerNav.classList.toggle("Header-nav--show");
    headerModal.classList.toggle("Header__modal--show");
  });

  headerModal.addEventListener("click", () => {
    headerMenu.classList.toggle("Header__close");
    headerNav.classList.toggle("Header-nav--show");
    headerModal.classList.toggle("Header__modal--show");
  });
});
