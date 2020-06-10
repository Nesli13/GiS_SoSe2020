"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    artikelErzeugen();
    function artikelErzeugen() {
        for (let i = 0; i < Aufgabe07.süßigkeiten.length; i++) {
            //Div
            let divCandy = document.createElement("div");
            divCandy.setAttribute("class", "Produkte");
            //Bild
            let imgCandy = document.createElement("img");
            imgCandy.setAttribute("src", Aufgabe07.süßigkeiten[i].img);
            imgCandy.setAttribute("alt", Aufgabe07.süßigkeiten[i].alt);
            //Name
            let candyName = document.createElement("h2");
            candyName.innerHTML = Aufgabe07.süßigkeiten[i].name;
            //Preis
            let candyPreis = document.createElement("h3");
            candyPreis.innerHTML = Aufgabe07.süßigkeiten[i].preis + "€";
            //Beschreibung
            let candybeschreibung = document.createElement("p");
            candybeschreibung.innerHTML = Aufgabe07.süßigkeiten[i].beschreibung;
            //Button
            let button = document.createElement("input");
            button.type = "button";
            button.value = "Kaufen";
            candyPreis.appendChild(button);
            //button.addEventListener("click", handleAdd);
            button.addEventListener("click", kaufenButton);
            button.setAttribute("preis", Aufgabe07.süßigkeiten[i].preis.toString());
            // Alle Tags zu div Container
            divCandy.appendChild(imgCandy);
            divCandy.appendChild(candyName);
            divCandy.appendChild(candyPreis);
            divCandy.appendChild(candybeschreibung);
            divCandy.appendChild(button);
            switch (Aufgabe07.süßigkeiten[i].kategorien) {
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
        //Teilaufgabe 1:
        let produktZähler = 0;
        let preis = 0;
        let zahlAnzeigen = document.createElement("p");
        let anzahlAnzeigen = document.createElement("div");
        anzahlAnzeigen.id = "anzahlAnzeigen";
        function kaufenButton(_event) {
            produktZähler++;
            console.log(produktZähler);
            preis += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preis);
            if (produktZähler == 1) {
                document.getElementById("counterBlase")?.appendChild(anzahlAnzeigen);
            }
            anzahlAnzeigen.innerHTML = "" + produktZähler;
            document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
        }
        //Ein-/Ausblenden der Produkte
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "süßwarenB":
                    süßwaren();
                    break;
                case "extraScharfB":
                    extraScharff();
                    break;
            }
            function süßwaren() {
                document.getElementById("kategorie1").style.display = "inline-grid";
                document.getElementById("kategorie2").style.display = "none";
            }
            function extraScharff() {
                document.getElementById("kategorie2").style.display = "inline-grid";
                document.getElementById("kategorie1").style.display = "none";
            }
        }
        //neue Varialbe + Verlinkung zu den Button
        let süßwarenAnzeigen = document.querySelector("#süßwarenB");
        süßwarenAnzeigen.addEventListener("click", handleCategoryClick.bind(süßwarenAnzeigen));
        let extraScharfAnzeigen = document.querySelector("#extraScharfB");
        extraScharfAnzeigen.addEventListener("click", handleCategoryClick.bind(extraScharfAnzeigen));
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map