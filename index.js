// declaring variables
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const body = document.body;
const navBar = document.querySelector(".nav-bar");
const mainHeading = document.querySelector(".heading-container");
const extensionTray = document.querySelectorAll(".extension-tray");
const extensionInfoHeader = [...document.getElementsByTagName("h3")];
const extensionInfoParagraph = [...document.getElementsByTagName("p")];
const removeExtension = document.getElementById("removeExtension");
const toggleSwitch = document.querySelectorAll(".switch input");

// handles moon / sun icon swap as well as dark mode/light mode swap
moonIcon.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  moonIcon.classList.add("hide");
  sunIcon.classList.add("show");
  body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
  navBar.style.backgroundColor = "hsl(226, 25%, 17%)";
  mainHeading.style.color = "hsl(217, 61%, 90%)";

  //extension tray swap
  extensionTray.forEach((element) => {
    element.style.backgroundColor = "hsl(226, 25%, 17%)";
  });
  extensionInfoHeader.forEach((h3) => {
    h3.style.color = "hsl(217, 61%, 90%)";
  });
  extensionInfoParagraph.forEach((p) => {
    p.style.color = "hsl(0, 0%, 78%)";
  });
});

sunIcon.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  moonIcon.classList.remove("hide");
  sunIcon.classList.remove("show");
  body.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
  navBar.style.backgroundColor = "hsl(0, 0%, 93%)";
  mainHeading.style.color = "hsl(227, 75%, 14%)";

  //extension tray swap
  extensionTray.forEach((element) => {
    element.style.backgroundColor = "hsl(0, 0%, 93%)";
  });
  extensionInfoHeader.forEach((h3) => {
    h3.style.color = "hsl(227, 75%, 14%)";
  });
  extensionInfoParagraph.forEach((p) => {
    p.style.color = "hsl(226, 11%, 37%)";
  });
});
