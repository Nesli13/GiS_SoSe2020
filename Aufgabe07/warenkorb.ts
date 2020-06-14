namespace Aufgabe07 {
    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;




    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();

    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            let articlesJSON: string = <string>localStorage.getItem(key);

            let item: Süßigkeiten = <Süßigkeiten>JSON.parse(articlesJSON);

            gesamtPreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }

    function createDynamicContent(_inputArticle: Süßigkeiten): void {

        //Div erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //IMG IN DIV PACKEN
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = _inputArticle.img;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        //NAME
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", newDiv.innerHTML);
        newDiv.appendChild(price);

        //BESCHREIBUNG
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = _inputArticle.beschreibung;
        newDiv.appendChild(beschreibung);

        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Süßigkeiten, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }

/*
    function removeAll(): void {
        let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
        remButton.addEventListener("click", handleRemoveAll);
    }
*/
    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
        }


}
