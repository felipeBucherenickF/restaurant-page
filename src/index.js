import "./styles.css";
import { Home } from "./home";
import { Menu } from "./menu";
import { About } from "./about";

const content = document.getElementById("content");

content.appendChild(Home());

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

homeButton.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(Home());
});

menuButton.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(Menu());
});

aboutButton.addEventListener("click", () => {
  content.textContent = "";
  content.append(About());
});
