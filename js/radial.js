var rgb = document.querySelector("h3");
var hex = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var hexbody;

function setRGradient() {
  var values = "radial-gradient(circle, " + color1.value + ", " + color2.value + ", " + color3.value + ")";
  body.style.background = values;
  hexbody = values;
  setContext();
}

function setContext() {
  rgb.textContent = "RGB: " + body.style.background + ";";
  hex.textContent = "HEX: " + hexbody + ";";
}

setRGradient();
color1.addEventListener("input", setRGradient);
color2.addEventListener("input", setRGradient);
color3.addEventListener("input", setRGradient);
