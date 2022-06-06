const hamburger = document.querySelector(".hamburger");
const modal = document.getElementById("modal");
const closeIcon = document.querySelector(".close-icon");
const listItems = document.querySelectorAll(".list__items");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  modal.showModal();
  body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  modal.close();
  body.style.overflow = "auto";
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
