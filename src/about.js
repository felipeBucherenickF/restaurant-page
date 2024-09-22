export const About = () => {
  const aboutContent = document.createElement("div");
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About";
  aboutContent.appendChild(aboutTitle);
  return aboutContent;
};
