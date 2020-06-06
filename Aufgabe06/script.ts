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
      
     //EINKAUFSWAGEN VARIABLEN
        let wagenCounter: number = 0;

     //WagenCounter erstellen
        let counterAnzeigen: HTMLParagraphElement = document.createElement("p");
 
     //wagenBubbleDiv erstellen
        let wagenBubble: HTMLDivElement = document.createElement("div");
        wagenBubble.id = "wagenBubble";
 
     //Werte Variable
        let gesammtWert: number = 0;
 
        function handleAddArticle(_event: Event): void {
        
         //Blase erstellen bei min. 1 Artikel
         if (wagenCounter >= 0) {
             document.getElementById("artikelBlase")?.appendChild(wagenBubble);
         }
 
         //Zahl in Blase anzeigen
         wagenCounter++;
         counterAnzeigen.innerHTML = "" + wagenCounter;
         document.getElementById("wagenBubble")?.appendChild(counterAnzeigen);
 
         //Wert zusammen rechnen
         let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("i")!;
         let indexNr: number = parseInt(indexButton);
         gesammtWert = gesammtWert + süßigkeiten[indexNr].preis;
         console.log(gesammtWert);
     }
 
 
            
        
    
    }

}
}
    

