

var count= 0;

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
        //button.addEventListener("click", handleAdd);
        button.addEventListener("click", kaufenButton);
        button.setAttribute("preis", süßigkeiten[i].preis.toString());

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
      //Teilaufgabe 1:
            
        let produktZähler: number = 0;
        let preis: number = 0;

        let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
        let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
        anzahlAnzeigen.id = "anzahlAnzeigen";

        function kaufenButton (_event: Event): void {
            produktZähler++;
            console.log(produktZähler);

            preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preis);

            if (produktZähler >= 0) {
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
    //neue Varialbe + Verlinkung zu den Button
        let süßwarenAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#süßwarenB");
        süßwarenAnzeigen.addEventListener("click", handleCategoryClick.bind(süßwarenAnzeigen));

        let extraScharfAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#extraScharfB");
        extraScharfAnzeigen.addEventListener("click", handleCategoryClick.bind(extraScharfAnzeigen));
        


    }

}

    
}
