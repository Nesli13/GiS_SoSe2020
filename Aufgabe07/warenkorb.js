"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let gesamtpreis;
    let pGesamtpreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtpreis = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let artikelJSON = localStorage.getItem(key);
            let item = JSON.parse(artikelJSON);
            gesamtpreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }
    function createDynamicContent(_inputArticle) {
        //Div erstellen
        let divCandy = document.createElement("div");
        contentDiv.appendChild(divCandy);
        divCandy.id = _inputArticle.name;
        console.log(divCandy.id);
        //IMG IN DIV PACKEN
        let imgCandy = document.createElement("img");
        imgCandy.src = _inputArticle.img;
        divCandy.appendChild(imgCandy);
        console.log(imgCandy);
        //NAME
        let candyName = document.createElement("h1");
        candyName.innerHTML = _inputArticle.name;
        divCandy.appendChild(candyName);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        divCandy.setAttribute("preis", price.innerHTML);
        divCandy.appendChild(price);
        //BESCHREIBUNG
        let desc = document.createElement("p");
        desc.innerHTML = _inputArticle.beschreibung;
        divCandy.appendChild(desc);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        divCandy.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtpreis;
    }
    /*
        function removeAll(): void {
            let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
            remButton.addEventListener("click", handleRemoveAll);
        }
    */
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map