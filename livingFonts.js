var smilie;
var words;
var wordsRaw;
var textInput;
var textField;
var enthalten;

function setup() {
  noCanvas();

  textInput = createInput();
  textField = createP("|");

  smilie = createP("Y");
  smilie.style("font-family", "myFont");
  enthalten = createP();
  fillwordsRaw();
  textInput.input(getInput);
}

function getInput() {
  textField.html(textInput.value());
  textField.style("font-family", "myFont");
  //textField.style("border-style", "dotted");
}

function draw() {
  smilie.style("font-size", 80);

  if (containsWord()) {
    smilie.style("font-variation-settings", "'bxxx'" + 100);

  } else {
    smilie.style("font-variation-settings", "'bxxx'" + 000);

  }
}

function containsWord() {
  var i;
  for (i = 0; i < words.length; i++) {
    if (words[i] == textInput.value())
      return true;
  }
  return false;
}

function fillwordsRaw() {

  wordsRaw = "arrogant,abgespannt, aggressiv, alarmiert, angeekelt, angespannt, ängstlich, angstschlotternd, angreifend, ärgerlich, argwöhnisch, aufgebracht, ausgelaugtbeängstigt, bedrängt, bedrückt, befangen, befremdet, beklommen, bekümmert, belastet, beleidigt, beschämt, besorgt, bestürzt, betroffen, betrübt, beunruhigt, bitter, blockiert, bösartig, brummig,daneben, depressiv, deprimiert, distanziert, dumpf, durcheinander,  eifersüchtig, einsam, ekelerfüllt, empfindlich, empört, energielos, entmutigt, entrüstet, entsetzt, enttäuscht, ermüdet, ernüchtert, erregt, erschlagen, erschöpft, erschrocken, erzürnt, feindselig, feststeckend, frustriert, furchtsam, feindlich,  gehässig, gehemmt, geladen, gelangweilt, gemein, gequält, gereizt, gestört, gewalttätig, gleichgültig, griesgrämig, grantig,  hasserfüllt, herabgewürdigt, hilflos,hitzköpfig, hoffnungslos, hundsmiserabel,  irritiert,  jämmerlich,  kalt, kribbelig, kraftlos,  launisch, leer, lüstern, lustlos,    masochistisch, mäkelnd, missmutig, misstrauisch, mies, müde, mürrisch, mutlos,neidisch,nervös, niedergeschlagen, niederträchtig, nachtragend,    ohnmächtigm  panisch, peinlich, perplex, pessimistisch,  ratlos, ruhelos, rasend, rachsüchtig,    sauer, sadistisch, scheu, schläfrig, schlapp, schmollend, schockiert, schuldig, selbstkritisch, selbstverachtend, scheußlich, schmerzerfüllt, schwermütig, schwunglos, skeptisch, sorgenvoll, strapaziert, streitlustig ,teilnahmslos, träge, traurig, trübselig,    überdrüssig, überfordert, überlastet, unangenehm, unbehaglich, unbeteiligt, ungeduldig, ungehalten, ungemütlich, unglücklich, unklar, unnahbar, unruhig, unschlüssig, unsicher, unwohl, unzufrieden,    verängstigt, verärgert, verbittert, verkrampft, verlegen, verletzbar, verletzt, verloren, verrückt, verschlafen, verschlossen, verschreckt, verspannt, verstimmt, verstört, verunsichert, verwirrt, verzagt, verzweifelt, vorwurfsvoll,  weinerlich, widerwillig, wütend, wutentbrannt, zappelig, zerknirscht, zermürbt, zerrissen, zittrig, zögerlich, zornig, zurückgewiesen, zynisch";

  words = wordsRaw.split(',');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].trim();
  }
}