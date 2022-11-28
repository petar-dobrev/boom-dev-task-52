import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const body = document.body;
  const articleNubmers = 5;

  function appendArticle() {
    const articleEl = document.createElement("article");
    articleEl.classList.add("message");
    articleEl.innerText = "This is a sample text";
    body.appendChild(articleEl);
  }

  function onBodyClick() {
    Array.from({ length: articleNubmers }, () => appendArticle());
  }

  body.addEventListener("click", onBodyClick);
});
