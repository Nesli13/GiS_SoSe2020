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
        candyPreis.innerHTML = süßigkeiten[i].preis;

        //Beschreibung
        let candybeschreibung: HTMLElement = document.createElement("p");
        candybeschreibung.innerHTML = süßigkeiten[i].beschreibung;

        //Button
        /*let button: HTMLElement = document.createElement("button")*/

        // Alle Tags zu div Container
        divCandy.appendChild(imgCandy);
        divCandy.appendChild(candyName);
        divCandy.appendChild(candyPreis);
        divCandy.appendChild(candybeschreibung);

        document.getElementById("liste")?.appendChild(artikelSüßwaren);
        document.getElementById("liste")?.appendChild(divCandy);
    }
}
namespace Aufgabe05 {
    for (let i: number = 0; i < scharf.length; i++) {
        //Überschrift
       
        let artikel: HTMLElement = document.createElement("h1");
        artikel.innerHTML = "Extra Scharf";

        if (i == 0) {
            artikel.innerHTML = "Extra Scharf";

        } else {
            artikel.innerHTML = " ";
        }

        let artikelScharf: HTMLElement = document.createElement("div");
        artikelScharf.setAttribute("id", "ExtraScharf");

        
        //Bild
        let imgScharf: HTMLElement = document.createElement("img");
        imgScharf.setAttribute("src", scharf[i].img);
        imgScharf.setAttribute("alt", scharf[i].alt);
        
        //Name
        let scharfName: HTMLElement = document.createElement("h2");
        scharfName.innerHTML = scharf[i].name;

        //Preis
        let scharfPreis: HTMLElement = document.createElement("h3");
        scharfPreis.innerHTML = scharf[i].preis;

        //Beschreibung
        let scharfbeschreibung: HTMLElement = document.createElement("p");
        scharfbeschreibung.innerHTML = scharf[i].beschreibung;

        //Button
        /*let button: HTMLElement = document.createElement("button")*/

        // Alle Tags zu div Container
        artikelScharf.appendChild(imgScharf);
        artikelScharf.appendChild(scharfName);
        artikelScharf.appendChild(scharfPreis);
        artikelScharf.appendChild(scharfbeschreibung);

        document.getElementById("liste")?.appendChild(artikel);
        document.getElementById("liste")?.appendChild(artikelScharf);
    }
}