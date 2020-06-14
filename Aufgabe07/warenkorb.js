"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtpreis;
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
            let articlesJSON = localStorage.getItem(key);
            let item = JSON.parse(articlesJSON);
            gesamtpreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }
    function createDynamicContent(_inputArticle) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //IMG IN DIV PACKEN
        let imgElement = document.createElement("img");
        imgElement.src = _inputArticle.img;
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", newDiv.innerHTML);
        newDiv.appendChild(price);
        //BESCHREIBUNG
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = _inputArticle.beschreibung;
        newDiv.appendChild(beschreibung);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2);
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