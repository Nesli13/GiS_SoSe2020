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
            button.addEventListener("click", handleaddArticle);
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
            //Teilaufgabe 1:
            let wagenCounter = 0;
            let zählerAnzeigen = document.createElement("p");
            //wagenBubbleDiv erstellen
            let wagenBubble = document.createElement("div");
            wagenBubble.id = "wagenBubble";
            //Werte Variable
            let gesammtWert = 0;
            function handleaddArticle(_event) {
                //Zähler wird ab 1 angezeigt
                if (wagenCounter >= 0) {
                    document.getElementById("counterBlase")?.appendChild(wagenBubble);
                }
                //Zähler anzeigen
                wagenCounter++;
                zählerAnzeigen.innerHTML = "" + wagenCounter;
                document.getElementById("wagenBubble")?.appendChild(zählerAnzeigen);
                //Gesammtwert
                let indexButton = _event.currentTarget.parentElement.getAttribute("i");
                let i = parseInt(indexButton);
                gesammtWert = gesammtWert + Aufgabe06.süßigkeiten[i].preis;
                console.log(gesammtWert);
            }
            //Teilaufgabe 2:
            let candys = document.getElementById("süßwaren");
            let scharfes = document.getElementById("extraScharf");
            candys.addEventListener("click", handleKatCandys);
            scharfes.addEventListener("click", handleKatScharf);
            function handleKatCandys(_event) {
                document.getElementById("Süßwaren")?.setAttribute("style", "display: normal");
                document.getElementById("ExtraScharf")?.setAttribute("style", "display: none");
            }
            function handleKatScharf(_evet) {
                document.getElementById("Süßwaren")?.setAttribute("style", "display: none");
                document.getElementById("ExtraScharf")?.setAttribute("style", "display: normal");
            }
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map