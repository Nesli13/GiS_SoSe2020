namespace Aufgabe05 {

    for (let i: number = 0; i < süßigkeiten.length; i++) {
        //Überschrift
        let artikelHoch: HTMLElement = document.createElement("h4");
        artikelHoch.innerHTML = "Gönn dir doch mal was Gutes!";
        artikelHoch.setAttribute ("id", "Hoch");

        let artikelSüßwaren: HTMLElement = document.createElement("h1");
        artikelSüßwaren.innerHTML = "Süßwaren";
        artikelSüßwaren.setAttribute("id", "Süßwaren");

        if (i == 0) {
            artikelSüßwaren.innerHTML = "Süßwaren";

        } else {
            artikelSüßwaren.innerHTML = " ";
        }
        
        let artikel: HTMLElement = document.createElement("h1");
        artikel.innerHTML = "Extra Scharf";

        if (i == 0) {
            artikel.innerHTML = "Extra Scharf";

        } else {
            artikel.innerHTML = " ";
        }

        let artikelScharf: HTMLElement = document.createElement("div");
        artikelScharf.setAttribute("id", "ExtraScharf");


        //Div Produkte --> Box
        let divCandy: HTMLElement = document.createElement("div");
        divCandy.setAttribute("class", "Produkte");

        //Bilder
        let imgCandy: HTMLElement = document.createElement("img");
        imgCandy.setAttribute("src", süßigkeiten[i].img);
        imgCandy.setAttribute("alt", süßigkeiten[i].alt);
        
        //Name des Produkts
        let candyName: HTMLElement = document.createElement("h2");
        candyName.innerHTML = süßigkeiten[i].name;

        //Preis des Produkts
        let candyPreis: HTMLElement = document.createElement("h3");
        candyPreis.innerHTML = süßigkeiten[i].preis + "€";

        //Beschreibung --> alt
        let candybeschreibung: HTMLElement = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten[i].beschreibung;

        //Button
        let button: HTMLInputElement = document.createElement("input");
        button.type = "button";
        button.value = "Kaufen";
        document.getElementById("liste")?.appendChild(button);

        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);
        divCandy.appendChild(button);

        document.getElementById("liste")?.appendChild(artikelSüßwaren);
        document.getElementById("liste")?.appendChild(divCandy);
        
        
        //Bild
        let imgScharf: HTMLElement = document.createElement("img");
        imgScharf.setAttribute("src", scharf[i].img);
        imgScharf.setAttribute("alt", scharf[i].alt);
        
        //Name
        let scharfName: HTMLElement = document.createElement("h2");
        scharfName.innerHTML = scharf[i].name;

        //Preis
        let scharfPreis: HTMLElement = document.createElement("h3");
        scharfPreis.innerHTML = scharf[i].preis + "€";

        //Beschreibung
        let scharfbeschreibung: HTMLElement = document.createElement("p");
        scharfbeschreibung.innerHTML = scharf[i].beschreibung;

       
        // Alle Tags zu div Container
        artikelScharf.appendChild(imgScharf);
        artikelScharf.appendChild(scharfName);
        artikelScharf.appendChild(scharfPreis);
        artikelScharf.appendChild(scharfbeschreibung);
        artikelScharf.appendChild(button);

        document.getElementById("liste")?.appendChild(artikel);
        document.getElementById("liste")?.appendChild(artikelScharf);
    }
}