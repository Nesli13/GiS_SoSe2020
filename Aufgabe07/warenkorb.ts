namespace Aufgabe07 {
    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let gesamtpreis: number;
    let pGesamtpreis: HTMLParagraphElement;



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
        gesamtpreis = 0;
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            let artikelJSON: string = <string>localStorage.getItem(key);

            let item: Süßigkeiten = <Süßigkeiten>JSON.parse(artikelJSON);

            gesamtpreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }

    function createDynamicContent(_inputArticle: Süßigkeiten): void {

        //Div erstellen
        let divCandy: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(divCandy);
        divCandy.id = _inputArticle.name;
        console.log(divCandy.id);

        //IMG IN DIV PACKEN
        let imgCandy: HTMLImageElement = document.createElement("img");
        imgCandy.src = _inputArticle.img;
        divCandy.appendChild(imgCandy);
        console.log(imgCandy);

        //NAME
        let candyName: HTMLParagraphElement = document.createElement("h1");
        candyName.innerHTML = _inputArticle.name;
        divCandy.appendChild(candyName);

        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        divCandy.setAttribute("preis", price.innerHTML);
        divCandy.appendChild(price);

        //BESCHREIBUNG
        let desc: HTMLParagraphElement = document.createElement("p");
        desc.innerHTML = _inputArticle.beschreibung;
        divCandy.appendChild(desc);

        //BUTTON
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        divCandy.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Süßigkeiten, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtpreis;
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
