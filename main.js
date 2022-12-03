import "./slider-config";
import "./scss/index.scss";

const $ = (selector) => document.querySelector(selector);

const headerBtnMenu = $("#header-btn");
const headerNavList = $("#header-nav-list");
const headerOverlay = $("#header-overlay");

headerBtnMenu.addEventListener("click", () => {
  headerBtnMenu.classList.toggle("is-active");
  headerNavList.classList.toggle("is-active");
  headerOverlay.classList.toggle("is-active");
});
