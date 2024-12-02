document.addEventListener("DOMContentLoaded", () => {
  const headerMenu = document.querySelector(".Header__menu");
  const headerNav = document.querySelector(".Header-nav");

  headerMenu.addEventListener("click", () => {
    if (headerNav.style.display === "flex") {
      headerNav.style.display = "none";
    } else {
      headerNav.style.display = "flex";
    }
  });
});
