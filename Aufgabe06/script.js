"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    artikelErzeugen();
    function artikelErzeugen() {
        for (let i = 0; i < Aufgabe06.süßigkeiten.length; i++) {
            //Div
            let divCandy = document.createElement("div");
            divCandy.setAttribute("class", "Produkte");
            //Bild
            let imgCandy = document.createElement("img");
            imgCandy.setAttribute("src", Aufgabe06.süßigkeiten[i].img);
            imgCandy.setAttribute("alt", Aufgabe06.süßigkeiten[i].alt);
            //Name
            let candyName = document.createElement("h2");
            candyName.innerHTML = Aufgabe06.süßigkeiten[i].name;
            //Preis
            let candyPreis = document.createElement("h3");
            candyPreis.innerHTML = Aufgabe06.süßigkeiten[i].preis + "€";
            //Beschreibung
            let candybeschreibung = document.createElement("p");
            candybeschreibung.innerHTML = Aufgabe06.süßigkeiten[i].beschreibung;
            //Button
            let button = document.createElement("input");
            button.type = "button";
            button.value = "Kaufen";
            candyPreis.appendChild(button);
            button.addEventListener("click", handleAddArticle);
            // Alle Tags zu div Container
            divCandy.appendChild(imgCandy);
            divCandy.appendChild(candyName);
            divCandy.appendChild(candyPreis);
            divCandy.appendChild(candybeschreibung);
            divCandy.appendChild(button);
            switch (Aufgabe06.süßigkeiten[i].kategorien) {
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
            //EINKAUFSWAGEN VARIABLEN
            let wagenCounter = 0;
            //WagenCounter erstellen
            let counterAnzeigen = document.createElement("p");
            //wagenBubbleDiv erstellen
            let wagenBubble = document.createElement("div");
            wagenBubble.id = "wagenBubble";
            //Werte Variable
            let gesammtWert = 0;
            function handleAddArticle(_event) {
                //Blase erstellen bei min. 1 Artikel
                if (wagenCounter >= 0) {
                    document.getElementById("artikelBlase")?.appendChild(wagenBubble);
                }
                //Zahl in Blase anzeigen
                wagenCounter++;
                counterAnzeigen.innerHTML = "" + wagenCounter;
                document.getElementById("wagenBubble")?.appendChild(counterAnzeigen);
                //Wert zusammen rechnen
                let indexButton = _event.currentTarget.parentElement.getAttribute("i");
                let indexNr = parseInt(indexButton);
                gesammtWert = gesammtWert + Aufgabe06.süßigkeiten[indexNr].preis;
                console.log(gesammtWert);
            }
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map