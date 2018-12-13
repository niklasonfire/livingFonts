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
  textInput.input(getInput);
  list = createP();
  //v = 200;
}


function draw() {
  textField.style("font-size", 40);
  textField.style("font-family", "myFont");

  if (containsWord()) {
    v = 200 - word.length * 5;
    textField.style("font-variation-settings", "'wght'" + v);
    //  textField.html(textInput.value() + " ");

  } else {

    textField.style("font-variation-settings", "'wght'" + v);
    //textField.html(textInput.value() + " ");
  }

}


function getInput() {
  textField.html(textInput.value());
  textField.style("font-family", "myFont");

}

function containsWord() {
  var i;

  if (keyCode == 32) {
    word = textInput.value().split(" ");

    //  list.html(word);
    for (i = 0; i < words.length; i++) {
      if (word[word.length - 2] == words[i]) {
        //console.log(true);
        return true;
      }
    }
  }
  //console.log(false);
  return false;
}

function fillwordsRaw() {

  wordsRaw = "halt,arrogant,abgespannt, aggressiv, alarmiert, angeekelt, angespannt, ängstlich, angstschlotternd, angreifend, ärgerlich, argwöhnisch, aufgebracht, ausgelaugtbeängstigt, bedrängt, bedrückt, befangen, befremdet, beklommen, bekümmert, belastet, beleidigt, beschämt, besorgt, bestürzt, betroffen, betrübt, beunruhigt, bitter, blockiert, bösartig, brummig,daneben, depressiv, deprimiert, distanziert, dumpf, durcheinander,  eifersüchtig, einsam, ekelerfüllt, empfindlich, empört, energielos, entmutigt, entrüstet, entsetzt, enttäuscht, ermüdet, ernüchtert, erregt, erschlagen, erschöpft, erschrocken, erzürnt, feindselig, feststeckend, frustriert, furchtsam, feindlich,  gehässig, gehemmt, geladen, gelangweilt, gemein, gequält, gereizt, gestört, gewalttätig, gleichgültig, griesgrämig, grantig,  hasserfüllt, herabgewürdigt,hilfe, hilflos,hitzköpfig, hoffnungslos, hundsmiserabel,  irritiert,  jämmerlich,  kalt, kribbelig, kraftlos,  launisch, leer, lüstern, lustlos,    masochistisch, mäkelnd, missmutig, misstrauisch, mies, müde, mürrisch, mutlos,neidisch,nervös, niedergeschlagen, niederträchtig, nachtragend,    ohnmächtigm  panisch, peinlich, perplex, pessimistisch,  ratlos, ruhelos, rasend, rachsüchtig,    sauer, sadistisch, scheu, schläfrig, schlapp, schmollend, schockiert, schuldig, selbstkritisch, selbstverachtend, scheußlich, schmerzerfüllt, schwermütig, schwunglos, skeptisch, sorgenvoll, strapaziert, streitlustig ,teilnahmslos, träge, traurig, trübselig,    überdrüssig, überfordert, überlastet, unangenehm, unbehaglich, unbeteiligt, ungeduldig, ungehalten, ungemütlich, unglücklich, unklar, unnahbar, unruhig, unschlüssig, unsicher, unwohl, unzufrieden,    verängstigt, verärgert, verbittert, verkrampft, verlegen, verletzbar, verletzt, verloren, verrückt, verschlafen, verschlossen, verschreckt, verspannt, verstimmt, verstört, verunsichert, verwirrt, verzagt, verzweifelt, vorwurfsvoll,  weinerlich, widerwillig, wütend, wutentbrannt, zappelig, zerknirscht, zermürbt, zerrissen, zittrig, zögerlich, zornig, zurückgewiesen, zynisch";

  words = wordsRaw.split(',');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].trim();
  }
}