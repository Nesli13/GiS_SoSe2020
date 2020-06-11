"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let gesamtpreis = 0;
    let pGesamtpreis = document.createElement("p");
    let countTo = parseInt(localStorage.getItem("anzahlArtikel"));
    createWarenkorbArtikel();
    function createWarenkorbArtikel() {
        for (let index = 0; index <= countTo - 1; index++) {
            //Div erstellen
            let divCandy = document.createElement("div");
            document.getElementById("flexIDWarenkorb").appendChild(divCandy);
            divCandy.id = "divId" + index;
            console.log("divId" + index);
            //IMG IN DIV PACKEN
            let imgCandy = document.createElement("img");
            imgCandy.src = localStorage.getItem("articles_bild" + index);
            divCandy.appendChild(imgCandy);
            console.log(imgCandy);
            //NAME
            let name = document.createElement("h1");
            name.innerHTML = localStorage.getItem("articles_name" + index);
            divCandy.appendChild(name);
            //PREIS
            let candyPreis = document.createElement("p");
            candyPreis.innerHTML = localStorage.getItem("articles_preis" + index);
            divCandy.setAttribute("preis", candyPreis.innerHTML);
            divCandy.appendChild(candyPreis);
            //BESCHREIBUNG
            let candybeschreibung = document.createElement("p");
            candybeschreibung.innerHTML = localStorage.getItem("articles_beschreibung" + index);
            divCandy.appendChild(candybeschreibung);
            //BUTTON
            let button = document.createElement("button");
            button.innerHTML = "Löschen";
            divCandy.appendChild(button);
            button.addEventListener("click", handleRemoveArticle);
            //Gesamtpreis berechnen
            gesamtpreis = gesamtpreis + parseFloat(candyPreis.innerHTML);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            setGesamtpreis();
        }
        function handleRemoveArticle(_event) {
            //Gesampreis reduzieren
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            gesamtpreis = gesamtpreis - parseFloat(preisString);
            pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
            setGesamtpreis();
            //Artikel Löschen
            (_event.currentTarget.parentElement).remove();
        }
        removeAll();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
    }
    function removeAll() {
        let remButton = document.getElementById("liRemoveAll");
        remButton.addEventListener("click", handleRemoveAll);
    }
    function handleRemoveAll(_event) {
        for (let index = 0; index <= countTo - 1; index++) {
            try {
                document.getElementById("divId" + index).remove();
            }
            catch (error) {
                console.log(error);
                console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
            }
            pGesamtpreis.innerHTML = 0 + "€";
            setGesamtpreis();
            localStorage.clear();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map