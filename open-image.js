document.addEventListener("DOMContentLoaded", () => {
  const workRowItems = document.querySelectorAll(".Work-row-item");
  const workModal = document.querySelector(".Work-modal");
  const workModalContent = document.querySelector(".Work-content");
  const workModalClose = document.querySelector(".Work-modal__close");

  workRowItems.forEach((item) => {
    const initialBgColor = window.getComputedStyle(item).backgroundColor;
    item.addEventListener("click", () => {
      if (workModal.style.display != "block") {
        workModal.style.display = "block";
        workModalContent.style.display = "block";
        workModalContent.style.backgroundColor = initialBgColor;
      }
    });
  });

  workModalClose.addEventListener("click", () => {
    workModal.style.display = "none";
    workModalContent.style.display = "none";
  });

  workModal.addEventListener("click", () => {
    workModal.style.display = "none";
    workModalContent.style.display = "none";
  });
});
