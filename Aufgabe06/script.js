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
            document.getElementById(Aufgabe06.süßigkeiten[i].img)?.appendChild(button);
            button.addEventListener("click", handleClick);
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
            let summe = 0;
            let anzahl = 0;
            function handleClick(_event) {
                let clickedObject = _event.target;
                // Anzahl berechnen & anzeigen
                anzahl++;
                document.getElementById("zähler").innerHTML = anzahl.toString();
                document.getElementById("zähler").setAttribute("style", "visibility: visible");
                // Summe berechnen & ausgeben
                let summeRechnen = clickedObject.previousSibling?.firstChild?.nodeValue;
                summeRechnen = summeRechnen.replace(/,/, ".");
                summe += parseFloat(summeRechnen);
                summeRechnen = summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
                console.log(summeRechnen);
            }
            document.getElementById("Süßwaren")?.addEventListener("click", handleChooseClick);
            document.getElementById("ExtraScharf")?.addEventListener("click", handleChooseClick);
            function handleChooseClick(_event) {
                let clickKategorie = _event.target;
                document.getElementById("kategorie1").setAttribute("style", "display:none");
                document.getElementById("kategorie2").setAttribute("style", "display:none");
                if (clickKategorie.id == "Süßwaren") {
                    document.getElementById("kategorie1").setAttribute("style", "visibility: visible");
                }
                if (clickKategorie.id == "ExtraScharf") {
                    document.getElementById("kategorie2").setAttribute("style", "visibility: visbile");
                }
            }
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map