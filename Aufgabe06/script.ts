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
        button.addEventListener("click", handleAdd);

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

        let wagenCounter: number = 0;
        let zählerAnzeigen: HTMLParagraphElement = document.createElement("p");
 
     //wagenBubbleDiv erstellen
        let wagenBubble: HTMLDivElement = document.createElement("div");
        wagenBubble.id = "wagenBubble";
 
     //Werte Variable
        let gesammtWert: number = 0;
        function handleAdd(_event: Event): void {
        
         //Zähler wird ab 1 angezeigt
         if (wagenCounter >= 0) {
             document.getElementById("counterBlase")?.appendChild(wagenBubble);
         }
 
         //Zähler anzeigen
         wagenCounter++;
         zählerAnzeigen.innerHTML = "" + wagenCounter;
         document.getElementById("wagenBubble")?.appendChild(zählerAnzeigen);
 
         //Gesammtwert
         let indexBtn: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("i")!;
         let i: number = parseInt(indexBtn);
         gesammtWert = gesammtWert + süßigkeiten[i].preis;
         console.log(gesammtWert);
     }
      
     //Ein-/Ausblenden der verschiedenen Produkte
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
            (<HTMLElement>document.getElementById("Süßwaren")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("ExtraScharf")).style.display = "none";

        }

            function extraScharff(): void {
            (<HTMLElement>document.getElementById("ExtraScharf")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("Süßwaren")).style.display = "none";
        
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
