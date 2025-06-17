var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var img = document.getElementById("image");
const numImages = 3;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
//   output.innerHTML = this.value; // show slider value for debugging
  img.src = "./assets/" + this.value + ".png"
}