export const Menu = () => {
  const menuContent = document.createElement("div");
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuContent.appendChild(menuTitle);
  return menuContent;
};
