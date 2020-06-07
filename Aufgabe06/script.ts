 namespace Aufgabe06 {
    
    let aktuelleProdukte: string = "";
    function artikelErzeugen(süßigkeiten: Süßigkeiten): void {
        
        //Div
        let divCandy: HTMLElement = document.createElement("div");
        divCandy.setAttribute("class", "Produkte");

         //Bild
        let imgCandy: HTMLElement = document.createElement("img");
        imgCandy.setAttribute("src", süßigkeiten.img);
        imgCandy.setAttribute("alt", süßigkeiten.alt);

          //Name
        let candyName: HTMLElement = document.createElement("h2");
        candyName.innerHTML = süßigkeiten.name;

         //Preis
        let candyPreis: HTMLElement = document.createElement("h3");
        candyPreis.innerHTML = süßigkeiten.preis + "€";
 
         //Beschreibung
        let candybeschreibung: HTMLElement = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten.beschreibung;

           //Button
        let button: HTMLInputElement = document.createElement("input");
        button.type = "button";
        button.value = "Kaufen";
       
        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);
        divCandy.appendChild(button);


        switch (süßigkeiten.kategorie) {
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
    function locationHashChanged() {
         let produktListe = document.getElementById("kategorie1" + "kategorie2");
         if (produktListe) {
                produktListe.innerHTML = ""; }
    
            /*if (location.hash) {
                aktuelleProdukte = location.hash.split("#")[1];
                if (aktuelleProdukte == "home") {
                    let artikelUeberschrift: HTMLElement = document.createElement("h2");
                    artikelUeberschrift.innerHTML = "Süßwaren und Extra Scharf";
                    document.getElementById("kategorie1" + "kategorie2")?.appendChild(artikelUeberschrift);
                }
                else {
                    let artikelUeberschrift: HTMLElement = document.createElement("h2");
                    artikelUeberschrift.innerHTML = aktuelleProdukte;
                    document.getElementById("kategorie1" + "kategorie2")?.appendChild(artikelUeberschrift);
                }
            }*/
        for (let i: number = 0; i < süßigkeiten.length; i++) {
        
            if (aktuelleProdukte == süßigkeiten[i].kategorie) {
                    artikelErzeugen(süßigkeiten[i]);
                }
                else if (aktuelleProdukte == "home") {
                    artikelErzeugen(süßigkeiten[i]);
                }

        } 
    }

    function pageLoad() {
            
    location.hash = "startseite";
    aktuelleProdukte = "startseite";
            // Artikelliste
    if (location.hash) {
                aktuelleProdukte = location.hash.split("#")[1];
                if (aktuelleProdukte == "startseite") {
                    let artikelUeberschrift: HTMLElement = document.createElement("h2");
                    artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                    document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
                }
                else {
                    let artikelUeberschrift: HTMLElement = document.createElement("h2");
                    artikelUeberschrift.innerHTML = aktuelleProdukte;
                    document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
                }
            }
    for (let i: number = 0; i < süßigkeiten.length; i++) {
                if (aktuelleProdukte == süßigkeiten[i].kategorien) {
                    artikelErzeugen(süßigkeiten[i]);
                }
                else if (aktuelleProdukte == "home") {
                    artikelErzeugen(süßigkeiten[i]);
                }
            }
        }

    window.onhashchange = locationHashChanged;  
    window.onload = pageLoad;

        //let warenkorbTotal: number = 0;
    let artikelZaehler: number = 0;
    let warenkorbTotal: number = 0;
    function handleClick(_event: Event): void  {
            artikelZaehler ++;
            if (artikelZaehler >= 0) {
                const blase = document.getElementById("divBlase");
                if (blase) blase.innerHTML = "" + artikelZaehler;
            }
            let produktId: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
            
            
        // Summe der Preise  
            for (let i: number = 0; i < süßigkeiten.length; i++) {
                if (süßigkeiten[i].id == produktId) {
                    warenkorbTotal = warenkorbTotal + süßigkeiten[i].preis; 
                }
            }
            console.log("Aktuelle Warenkorb Summe: " + warenkorbTotal + "€");  
        }}
    
