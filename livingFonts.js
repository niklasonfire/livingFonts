var smilie;
var sliderSize;
var sliderEyes;

function setup() {
  createDiv("Größe");
  sliderSize = createSlider(0, 100, 40, 0.1);
  createDiv("Smile");
  sliderSmile = createSlider(0, 100, 40, 0.1);
  smilie = createP("Y");
  smilie.style("font-family", "myFont");
}

function draw() {
  smilie.style("font-size", sliderSize.value());
  smilie.style("font-variation-settings", " 'axxx'" + sliderSmile.value());
}