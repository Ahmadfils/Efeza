const backtobadge = document.querySelector("#backtobadge");
const previewbtn = document.querySelector("#preview-btn");
const container = document.querySelector(".container");

previewbtn.addEventListener("click", () => {
  container.classList.add("preview-mode");
});

backtobadge.addEventListener("click", () => {
  container.classList.remove("preview-mode");
});
