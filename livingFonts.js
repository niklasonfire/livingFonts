var smilie;
var words;
var wordsRaw;
var textInput;
var textField;
var enthalten;
var word;
var list;
var v;

function setup() {
  noCanvas();
  textInput = createInput();
  textField = createP();
  fillwordsRaw();
  textField.style("font-family", "myFont");
  textField.style("font-size", 40);
  textField.style("transition", "all 2s");
  textInput.input(getInput);


}


function draw() {


  if (containsWord()) {
    v = 150;
    textField.style("font-variation-settings", "'wght'" + v);
  } else {
    v = 200;
    textField.style("font-variation-settings", "'wght'" + v);
  }

}


function getInput() {
  textField.html(textInput.value());


}

function containsWord() {
  var i;
  for (i = 0; i < words.length; i++) {
    if (textInput.value().includes(words[i])) {
      return true
    }
  }

  return false;
}



function fillwordsRaw() {
  $("textField").load("badWords.txt");
  //console.log(schtring);
  words = "huhu", "huashd";

}