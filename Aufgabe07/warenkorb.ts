namespace Aufgabe07 {
    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtpreis: number;




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
            let articlesJSON: string = <string>localStorage.getItem(key);

            let item: Süßigkeiten = <Süßigkeiten>JSON.parse(articlesJSON);

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
        imgCandy.src =  _inputArticle.img;
        divCandy.appendChild(imgCandy);
        console.log(imgCandy);

        //NAME
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        divCandy.appendChild(name);

        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        divCandy.setAttribute("preis", price.innerHTML);
        divCandy.appendChild(price);

        //BESCHREIBUNG
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = _inputArticle.beschreibung;
        divCandy.appendChild(beschreibung);

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
        pGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2);
    }

    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
        }


}
