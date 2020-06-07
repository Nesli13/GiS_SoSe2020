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
            button.addEventListener("click", handleAdd);
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
            function handleAdd(_event) {
                //Zähler wird ab 1 angezeigt
                if (wagenCounter >= 0) {
                    document.getElementById("counterBlase")?.appendChild(wagenBubble);
                }
                //Zähler anzeigen
                wagenCounter++;
                zählerAnzeigen.innerHTML = "" + wagenCounter;
                document.getElementById("wagenBubble")?.appendChild(zählerAnzeigen);
                //Gesammtwert
                let indexBtn = _event.currentTarget.parentElement.getAttribute("i");
                let i = parseInt(indexBtn);
                gesammtWert = gesammtWert + Aufgabe06.süßigkeiten[i].preis;
                console.log(gesammtWert);
            }
            //Neues Menü
            let menüKategorie = ["süßwaren", "extraScharf", "all"];
            for (let index = 0; index < menüKategorie.length; index++) {
                let liAnchor = document.createElement("a");
                liAnchor.href = "#";
                liAnchor.id = "anchor" + index;
                if (menüKategorie[index] == "süßwaren") {
                    liAnchor.innerHTML = "Süßwaren";
                }
                else if (menüKategorie[index] == "extraScharf") {
                    liAnchor.innerHTML = "extraScharf";
                }
                else {
                    liAnchor.innerHTML = "Alles";
                }
                document.getElementById("süßwaren").appendChild(liAnchor);
                liAnchor.addEventListener("click", handleClickMenu);
            }
            function handleClickMenu(_event) {
                if (_event.currentTarget.getAttribute("id") == "anchor0") {
                    document.getElementById("kategorie2").style.display = "none";
                    document.getElementById("ExtraScharf").style.display = "none";
                    document.getElementById("kategorie1").style.display = "flex";
                    document.getElementById("Süßwaren").style.display = "block";
                }
                else if (_event.currentTarget.getAttribute("id") == "anchor1") {
                    document.getElementById("kategorie2").style.display = "flex";
                    document.getElementById("ExtraScharf").style.display = "block";
                    document.getElementById("flexID").style.display = "none";
                    document.getElementById("Süßwaren").style.display = "none";
                }
                else {
                    document.getElementById("kategorie2").style.display = "flex";
                    document.getElementById("ExtraScharf").style.display = "block";
                    document.getElementById("flexID").style.display = "flex";
                    document.getElementById("Süßwaren").style.display = "block";
                }
            }
            /* //Ein-/Ausblenden der verschiedenen Produkte
               function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
                   switch (this.getAttribute("id")) {
                   case "süßwarenB":
                   süßwaren();
                   break;
                   case "extraScharfB":
                   extraScharff();
                   break;
               }
       
                   function süßwaren(): void {
                   (<HTMLElement>document.getElementById("Süßwaren")).style.display = "inline-grid";
                   (<HTMLElement>document.getElementById("ExtraScharf")).style.display = "none";
       
               }
       
                   function extraScharff(): void {
                   (<HTMLElement>document.getElementById("Süßwaren")).style.display = "inline-grid";
                   (<HTMLElement>document.getElementById("ExtraScharf")).style.display = "none";
               
               }
           }
           //neue Varialbe + Verlinkung zu den Button
               let süßwarenAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#süßwarenB");
               süßwarenAnzeigen.addEventListener("click", handleCategoryClick.bind(süßwarenAnzeigen));
       
               let extraScharfAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#außenpflanzenbutton");
               extraScharfAnzeigen.addEventListener("click", handleCategoryClick.bind(extraScharfAnzeigen));
               
       }*/
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map