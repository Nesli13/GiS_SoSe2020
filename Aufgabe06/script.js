"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let aktuelleProdukte = "";
    function artikelErzeugen(süßigkeiten) {
        //Div
        let divCandy = document.createElement("div");
        divCandy.setAttribute("class", "Produkte");
        //Bild
        let imgCandy = document.createElement("img");
        imgCandy.setAttribute("src", süßigkeiten.img);
        imgCandy.setAttribute("alt", süßigkeiten.alt);
        //Name
        let candyName = document.createElement("h2");
        candyName.innerHTML = süßigkeiten.name;
        //Preis
        let candyPreis = document.createElement("h3");
        candyPreis.innerHTML = süßigkeiten.preis + "€";
        //Beschreibung
        let candybeschreibung = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten.beschreibung;
        //Button
        let button = document.createElement("input");
        button.type = "button";
        button.value = "Kaufen";
        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);
        divCandy.appendChild(button);
        switch (süßigkeiten.kategorie) {
            case 1:
                let getContainer1 = document.getElementById("kategorie1");
                getContainer1.appendChild(divCandy);
                break;
            case 2:
                let getContainer2 = document.getElementById("kategorie2");
                getContainer2.appendChild(divCandy);
                break;
            default:
                break;
        }
    }
    function locationHashChanged() {
        let produktListe = document.getElementById("kategorie1" + "kategorie2");
        if (produktListe) {
            produktListe.innerHTML = "";
        }
        /*if (location.hash) {
            aktuelleProdukte = location.hash.split("#")[1];
            if (aktuelleProdukte == "home") {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Süßwaren und Extra Scharf";
                document.getElementById("kategorie1" + "kategorie2")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleProdukte;
                document.getElementById("kategorie1" + "kategorie2")?.appendChild(artikelUeberschrift);
            }
        }*/
        for (let i = 0; i < Aufgabe06.süßigkeiten.length; i++) {
            if (aktuelleProdukte == Aufgabe06.süßigkeiten[i].kategorie) {
                artikelErzeugen(Aufgabe06.süßigkeiten[i]);
            }
            else if (aktuelleProdukte == "home") {
                artikelErzeugen(Aufgabe06.süßigkeiten[i]);
            }
        }
    }
    function pageLoad() {
        location.hash = "startseite";
        aktuelleProdukte = "startseite";
        // Artikelliste
        if (location.hash) {
            aktuelleProdukte = location.hash.split("#")[1];
            if (aktuelleProdukte == "startseite") {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleProdukte;
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
        }
        for (let i = 0; i < Aufgabe06.süßigkeiten.length; i++) {
            if (aktuelleProdukte == Aufgabe06.süßigkeiten[i].kategorien) {
                artikelErzeugen(Aufgabe06.süßigkeiten[i]);
            }
            else if (aktuelleProdukte == "home") {
                artikelErzeugen(Aufgabe06.süßigkeiten[i]);
            }
        }
    }
    window.onhashchange = locationHashChanged;
    window.onload = pageLoad;
    //let warenkorbTotal: number = 0;
    let artikelZaehler = 0;
    let warenkorbTotal = 0;
    function handleClick(_event) {
        artikelZaehler++;
        if (artikelZaehler >= 0) {
            const blase = document.getElementById("divBlase");
            if (blase)
                blase.innerHTML = "" + artikelZaehler;
        }
        let produktId = _event.currentTarget.parentElement.getAttribute("id");
        // Summe der Preise  
        for (let i = 0; i < Aufgabe06.süßigkeiten.length; i++) {
            if (Aufgabe06.süßigkeiten[i].id == produktId) {
                warenkorbTotal = warenkorbTotal + Aufgabe06.süßigkeiten[i].preis;
            }
        }
        console.log("Aktuelle Warenkorb Summe: " + warenkorbTotal + "€");
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map