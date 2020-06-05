namespace Aufgabe06 {
    artikelErzeugen();
    
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
        button.type = "button";
        button.value = "Kaufen";
        candyPreis.appendChild(button);
        button.addEventListener("click", handleAddArticle);
       
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
      
        let wagenZähler: number = 0;

        let zählerAnzeiger: HTMLParagraphElement = document.createElement("p");

        let wagenBlase: HTMLDivElement = document.createElement("div");
        wagenBlase.id = "wagenBlase";

        let gesammtWert: number = 0;

        function handleAddArticle(_event: Event): void {
            if (wagenZähler >= 0) {
                document.getElementById("artikelBlase")?.appendChild(wagenBlase);

                wagenZähler++;
                zählerAnzeiger.innerHTML = "" + wagenZähler;
                document.getElementById("wagenBubble")?.appendChild(zählerAnzeiger);
        
        
                let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("i")!;
                let indexNr: number = parseInt(indexButton);
                gesammtWert = gesammtWert + süßigkeiten[indexNr].preis;
                console.log(gesammtWert);
            }
        }
    
    }

}
}
    

