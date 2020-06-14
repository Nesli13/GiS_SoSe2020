
namespace Aufgabe07 {


    let produktZähler: number = 0;
    let preisBerechnen: number = 0;



    let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
    let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";

    let süßigkeiten: Süßigkeiten[] = [];
    window.addEventListener("load", init);

    export interface Süßigkeiten {
        img: string;
        name: string;
        preis: number;
        beschreibung: string;
        alt: string;
        kategorien: number;
    }
    //Json daten werden vom Server gezogen
    function init(): void {
        let url: string = "articles.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        süßigkeiten = await response.json();
        console.log("End");
        artikelErzeugen();
    }

    function saveInLocalStorage(_inputArticle: Süßigkeiten): void {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    //Produkte einschleifen
    function artikelErzeugen(): void {
        for (let i: number = 0; i < süßigkeiten.length; i++) {

            //Div
            let divCandy: HTMLElement = document.createElement("div");
            divCandy.setAttribute("class", "Produkte");

            //Bild
            let imgCandy: HTMLElement = document.createElement("img");
            imgCandy.setAttribute("src", süßigkeiten[i].img);
            imgCandy.setAttribute("alt", süßigkeiten[i].alt);

            //Name
            let candyName: HTMLElement = document.createElement("h2");
            candyName.innerHTML = süßigkeiten[i].name;

            //Preis
            let candyPreis: HTMLElement = document.createElement("h3");
            candyPreis.innerHTML = süßigkeiten[i].preis + "€";

            //Beschreibung
            let candybeschreibung: HTMLElement = document.createElement("p");
            candybeschreibung.innerHTML = süßigkeiten[i].beschreibung;

            //Button
            let button: HTMLInputElement = document.createElement("input");
            button.innerHTML = "Jetzt kaufen";
            button.type = "button";
            button.value = "Kaufen";
            candyPreis.appendChild(button);
            //button.addEventListener("click", handleAdd);
            button.addEventListener("click", kaufenButton);
            button.setAttribute("preis", süßigkeiten[i].preis.toString());
            //"Button" in Warenkorb
            button.setAttribute("name", süßigkeiten[i].name);
            button.setAttribute("img", süßigkeiten[i].img);
            button.setAttribute("beschreibung", süßigkeiten[i].beschreibung);
            button.setAttribute("kategorien", süßigkeiten[i].kategorien.toString());

            document.getElementById("_süßigkeiten" + i)?.appendChild(button);
            document.getElementById("_süßigkeiten" + i)?.appendChild(button);


            // Alle Tags zu div Container
            divCandy.appendChild(imgCandy);
            divCandy.appendChild(candyName);
            divCandy.appendChild(candyPreis);
            divCandy.appendChild(candybeschreibung);
            divCandy.appendChild(button);

            switch (süßigkeiten[i].kategorien) {
                case 1:
                    let getContainer1: HTMLElement = document.getElementById("kategorie1")!;
                    getContainer1.appendChild(divCandy);
                    break;
                case 2:
                    let getContainer2: HTMLElement = document.getElementById("kategorie2")!;
                    getContainer2.appendChild(divCandy);
                    break;
                default:
                    break;
            }
        }

        //Teilaufgabe 1:


        function kaufenButton(this: Süßigkeiten, _event: Event): void {
            produktZähler++;
            console.log(produktZähler);

            saveInLocalStorage(this);
            preisBerechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preisBerechnen.toFixed(2));


            if (produktZähler == 1) {
                document.getElementById("counterBlase")?.appendChild(anzahlAnzeigen);
            }
            anzahlAnzeigen.innerHTML = "" + produktZähler;
            document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);

        }


        //Ein-/Ausblenden der Produkte
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
                (<HTMLElement>document.getElementById("kategorie1")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("kategorie2")).style.display = "none";

            }

            function extraScharff(): void {
                (<HTMLElement>document.getElementById("kategorie2")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("kategorie1")).style.display = "none";


            }

        }
        let süßwarenAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#süßwarenB");
        süßwarenAnzeigen.addEventListener("click", handleCategoryClick.bind(süßwarenAnzeigen));

        let extraScharfAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#extraScharfB");
        extraScharfAnzeigen.addEventListener("click", handleCategoryClick.bind(extraScharfAnzeigen));


    }
}