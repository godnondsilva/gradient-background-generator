var rgb = document.querySelector("h3");
var hex = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexbody;

function setLGradient() {
  var values = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  body.style.background = values;
  hexbody = values;
  setContext();
}

function setContext() {
  rgb.textContent = "RGB: " + body.style.background + ";";
  hex.textContent = "HEX: " + hexbody + ";";
}

setLGradient();
color1.addEventListener("input", setLGradient);
color2.addEventListener("input", setLGradient);
