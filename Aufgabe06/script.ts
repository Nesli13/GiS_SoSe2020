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
        document.getElementById(süßigkeiten[i].img)?.appendChild(button);
        button.addEventListener("click", handleClick);
       
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
      
        let summe: number = 0;
        let anzahl: number = 0;

        function handleClick(_event: Event): void {

        let clickedObject: HTMLElement = <HTMLElement>_event.target;

        // Anzahl berechnen & anzeigen
        anzahl++;
        document.getElementById("zähler")!.innerHTML = anzahl.toString();
        document.getElementById("zähler")!.setAttribute("style", "visibility: visible");

        // Summe berechnen & ausgeben
        let summeRechnen: string = clickedObject!.previousSibling?.firstChild?.nodeValue!;
        summeRechnen = summeRechnen.replace( /,/, "." );
        summe += parseFloat(summeRechnen);
        summeRechnen = summe.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        console.log(summeRechnen);

    }
        document.getElementById("Süßigkeiten")?.addEventListener("click", handleChooseClick);
        document.getElementById("Extra Scharf")?.addEventListener("click", handleChooseClick);

        function handleChooseClick(_event: Event): void{
        
        let clickKategorie: HTMLElement = <HTMLElement>_event.target;
        document.getElementById("Süßigkeiten")!.setAttribute("style", "display:none");
        document.getElementById("Extra Scharf")!.setAttribute("style", "display:none");

        if (clickKategorie.id == "Süßigkeiten") {
            document.getElementById("kategorien")!.setAttribute("style", "visibility: visible");
        }
        if (clickKategorie.id == "Extra Scharf") {
            document.getElementById("kategorien: 2")!.setAttribute("style", "visibility: visbile");
        }
    }
    }

}
}
    

