"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let btnHtml = document.getElementById("buttonHtml");
    btnHtml.addEventListener("click", clickHtml);
    let btnJson = document.getElementById("buttonJson");
    btnJson.addEventListener("click", clickJson);
    async function clickHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020nk.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let server = document.getElementById("server");
        server.innerHTML = responseText;
    }
    async function clickJson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020nk.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=skript.js.map