"use strict";
var count = 0;
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
            //button.addEventListener("click", handleAdd);
            button.addEventListener("click", kaufenButton);
            button.setAttribute("preis", Aufgabe06.süßigkeiten[i].preis.toString());
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
            let produktZähler = 0;
            let preis = 0;
            let zahlAnzeigen = document.createElement("p");
            let anzahlAnzeigen = document.createElement("div");
            anzahlAnzeigen.id = "anzahlAnzeigen";
            function kaufenButton(_event) {
                
                count++;

                //produktZähler++;
                //console.log(produktZähler);
                preis += parseFloat(_event.target?.getAttribute("preis"));
                console.log(preis);
                if (produktZähler >= 0) {
                    document.getElementById("counterBlase")?.appendChild(anzahlAnzeigen);
                }

            
                anzahlAnzeigen.innerHTML = "" + count;  //+ produktZähler;

                
                var list = document.getElementById("counterBlase");
                if(list.childNodes.length > 1)
                {
                    list.removeChild(list.childNodes[0]);
                    document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
                }
                else
                {
                    document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
                }
                


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
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map