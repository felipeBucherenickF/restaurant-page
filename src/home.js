export const Home = () => {
  const homeContent = document.createElement("div");
  const homeTitle = document.createElement("h1");
  homeTitle.textContent = "Eva Sushi";
  homeContent.appendChild(homeTitle);
  return homeContent;
};
