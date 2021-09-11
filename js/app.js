const color = document.getElementById("change-button");
const textColor = document.getElementById("change-text");
const body = document.body;

function randomColor() {
  return Math.floor(Math.random() * 255);
}

color.addEventListener("click", bgColor);

function bgColor() {
  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();

  const rgbString = `rgb(${color1}, ${color2}, ${color3})`;
  body.style.transition = "300ms all ease-in-out";
  body.style.background = rgbString;
  textColor.style.transition = "300ms all ease-in-out";
  textColor.innerText = rgbString;
}
