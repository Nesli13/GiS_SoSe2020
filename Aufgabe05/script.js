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
        if (i == 0) {
            artikelSüßwaren.innerHTML = "Süßwaren";
        }
        else {
            artikelSüßwaren.innerHTML = " ";
        }
        let artikel = document.createElement("h1");
        artikel.innerHTML = "Extra Scharf";
        if (i == 0) {
            artikel.innerHTML = "Extra Scharf";
        }
        else {
            artikel.innerHTML = " ";
        }
        let artikelScharf = document.createElement("div");
        artikelScharf.setAttribute("id", "ExtraScharf");
        //Div Produkte --> Box
        let divCandy = document.createElement("div");
        divCandy.setAttribute("class", "Produkte");
        //Bilder
        let imgCandy = document.createElement("img");
        imgCandy.setAttribute("src", süßigkeiten[i].img);
        imgCandy.setAttribute("alt", süßigkeiten[i].alt);
        //Name des Produkts
        let candyName = document.createElement("h2");
        candyName.innerHTML = süßigkeiten[i].name;
        //Preis des Produkts
        let candyPreis = document.createElement("h3");
        candyPreis.innerHTML = süßigkeiten[i].preis + "€";
        //Beschreibung --> alt
        let candybeschreibung = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten[i].beschreibung;
        //Button
        let button = document.createElement("input");
        button.type = "button";
        button.value = "Kaufen";
        document.getElementById("liste")?.appendChild(button);
        //Kategorie 2
        //Bild
        let imgScharf = document.createElement("img");
        imgScharf.setAttribute("src", scharf[i].img);
        imgScharf.setAttribute("alt", scharf[i].alt);
        //Name
        let scharfName = document.createElement("h2");
        scharfName.innerHTML = scharf[i].name;
        //Preis
        let scharfPreis = document.createElement("h3");
        scharfPreis.innerHTML = scharf[i].preis + "€";
        //Beschreibung
        let scharfbeschreibung = document.createElement("p");
        scharfbeschreibung.innerHTML = scharf[i].beschreibung;
        //Button
        let newbutton = document.createElement("input");
        button.type = "button";
        button.value = "Kaufen";
        document.getElementById("liste")?.appendChild(newbutton);
        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);
        divCandy.appendChild(button);
        document.getElementById("liste")?.appendChild(artikelSüßwaren);
        document.getElementById("liste")?.appendChild(divCandy);
        // Alle Tags zu div Container
        artikelScharf.appendChild(imgScharf);
        artikelScharf.appendChild(scharfName);
        artikelScharf.appendChild(scharfPreis);
        artikelScharf.appendChild(scharfbeschreibung);
        artikelScharf.appendChild(button);
        document.getElementById("liste")?.appendChild(artikel);
        document.getElementById("liste")?.appendChild(artikelScharf);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map