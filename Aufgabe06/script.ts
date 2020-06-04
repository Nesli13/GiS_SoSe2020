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

        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);
        divCandy.appendChild(button);

        switch (süßigkeiten[i].kategorie) {
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

}
}
    

