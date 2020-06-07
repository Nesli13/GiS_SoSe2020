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
        button.addEventListener("click", handleaddArticle);
       
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
        function handleaddArticle(_event: Event): void {
        
         //Zähler wird ab 1 angezeigt
         if (wagenCounter >= 0) {
             document.getElementById("counterBlase")?.appendChild(wagenBubble);
         }
 
         //Zähler anzeigen
         wagenCounter++;
         zählerAnzeigen.innerHTML = "" + wagenCounter;
         document.getElementById("wagenBubble")?.appendChild(zählerAnzeigen);
 
         //Gesammtwert
         let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("i")!;
         let i: number = parseInt(indexButton);
         gesammtWert = gesammtWert + süßigkeiten[i].preis;
         console.log(gesammtWert);
     }
 
     //Teilaufgabe 2:

        let candys: HTMLElement = document.getElementById("süßwaren") as HTMLElement;
        let scharfes: HTMLElement = document.getElementById("extraScharf") as HTMLElement;
        
        candys.addEventListener("click", handleKatCandys);
        scharfes.addEventListener("click", handleKatScharf);

        function handleKatCandys(_event: Event): void {
        document.getElementById("Süßwaren")?.setAttribute("style", "display: normal");
        document.getElementById("ExtraScharf")?.setAttribute("style", "display: none");
     }
        function handleKatScharf(_evet: Event): void {
            document.getElementById("Süßwaren")?.setAttribute("style", "display: none");
            document.getElementById("ExtraScharf")?.setAttribute("style", "display: normal");     
           }
}
}
}

