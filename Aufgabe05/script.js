"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    for (let i = 0; i < süßigkeiten.length; i++) {
        //Überschrift
        let artikelHoch = document.createElement("h4");
        artikelHoch.innerHTML = "Gönn dir doch mal was Gutes!";
        artikelHoch.setAttribute("id", "Hoch");
        let artikelSüßwaren = document.createElement("h1");
        artikelSüßwaren.innerHTML = "Süßwaren";
        artikelSüßwaren.setAttribute("id", "Süßwaren");
        //Div
        let divCandy = document.createElement("div");
        divCandy.setAttribute("class", "Produkte");
        //Bild
        let imgCandy = document.createElement("img");
        imgCandy.setAttribute("src", süßigkeiten[i].img);
        imgCandy.setAttribute("alt", süßigkeiten[i].alt);
        //Name
        let candyName = document.createElement("h2");
        candyName.innerHTML = süßigkeiten[i].name;
        //Preis
        let candyPreis = document.createElement("h3");
        candyPreis.innerHTML = süßigkeiten[i].preis;
        //Beschreibung
        let candybeschreibung = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten[i].beschreibung;
        //Button
        /*let button: HTMLElement = document.createElement("button")*/
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map