document.addEventListener("DOMContentLoaded", () => {
  const workRowItems = document.querySelectorAll(".Work-row-item");
  const workModal = document.querySelector(".Work-modal");
  const workModalClose = document.querySelector(".Work-modal__close");

  workRowItems.forEach((item) => {
    const initialBgColor = window.getComputedStyle(item).backgroundColor;
    item.addEventListener("click", () => {
      if (workModal.style.display != "block") {
        workModal.style.display = "block";
        workModal.style.backgroundColor = initialBgColor;
      }
    });
  });

  workModalClose.addEventListener("click", () => {
    workModal.style.display = "none";
  });
});
