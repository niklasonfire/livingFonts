var textInput;
var textField;
var enthalten;
var badWords;
var inpWords;
var list;
var weight;
var m;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,230,230);
  headline  = createElement("H1");
  headlineDiv = createDiv();
  headlineDiv.child(headline);
  headlineDiv.position(windowWidth/4+20,10);
  headline.parent(headlineDiv);
  headlineDiv.style("width","50%");
  headline.html("the antianti font fuer mehr positives denken und selbstbewusstein");
  headline.style("color","#4f1a27");

  resetBtn = createButton("Reset ");
  resetBtn.position((windowWidth/2)-330,windowHeight/4);
  resetBtn.mousePressed(resetAll);

  rectMode(CENTER);
  noStroke();
  textBox = rect(windowWidth/2,windowHeight/2+50,windowWidth/2,windowHeight/2);

  textInput = createInput();
  textInput.position((windowWidth/2)-250,windowHeight/4);
  textInput.attribute("size",50);

  // let textDiv = document.createElement("div");
  // let textField = document.createElement("p");
//  textDiv.appendChild(textField);
  textDiv = createDiv();
  textField =createP();
  textDiv.child(textField);
  textField.parent(textDiv);
  //textDiv.style("width","100px");
  textDiv.position(windowWidth/4+5,windowHeight/4+30);
  textDiv.style("width","50%");
  fillwordsRaw();
  textField.style("font-family", "myFont");
  textField.style("font-size", 40);
  textField.style("transition", "all 2s");
//  textField.position(windowWidth/4+5,windowHeight/4);


  textInput.input(getInput);
  m=0;
  list = [];
  v=200;
}


function draw() {

  if (containsWord()) {
    v = 200-list.length*10
    textField.style("font-variation-settings", "'wght'" + v);
  } else {

    textField.style("font-variation-settings", "'wght'" + v);
  }

}


function getInput() {
  textField.html(textInput.value());

}


function containsWord() {
  inpWords = textInput.value().split(" ");


  for(var i = 0; i < inpWords.length; i++) {
    for(var j = 0;j<badWords.length;j++){
      if ( badWords[j]===inpWords[i] && inpWords[i]!=list[i]) {
      list[m++] = inpWords[i];
      return true;
      }
    }
  }

  return false;
}

function resetAll(){
  location.reload();

}



function fillwordsRaw() {
  var txtFile = "aber, wenn, vielleicht, hätte, könnte, kann sein, mag sein, wollte, sollte, müsste, würde, aber, womöglich, möglicherweise, halt, man, im prinzip, prinzipiell, quasi, in der Regel, anscheinend, scheinbar, eigentlich, etwa, ungefähr, fast, gewiss, gelegentlich, grundsätzlich, glauben, meinen, finden, in etwa, in gewisser Weise, irgendwie, kaum, normalerweise, offenbar, relativ, selbstredend, sicherlich, bestimmt, wahrscheinlich, wenigstens, zumindest, sowieso, ziemlich, wirklich, wohl, überhaupt, übrigens, mal, einfach" ;

  badWords = txtFile.split(",");
  for (var i = 0; i < badWords.length; i++) {
    badWords[i] = badWords[i].trim();
  }

}
