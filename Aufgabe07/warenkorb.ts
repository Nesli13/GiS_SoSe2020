namespace Aufgabe07 {
        let gesamtpreis: number = 0;
        let pGesamtpreis: HTMLParagraphElement = document.createElement("p");
        let countTo: number = parseInt(localStorage.getItem("anzahlArtikel")!);
    
        createWarenkorbArtikel();
        function createWarenkorbArtikel(): void {
            for (let index: number = 0; index <= countTo - 1; index++) {
    
                //Div erstellen
                let divCandy: HTMLDivElement = document.createElement("div");
                (<HTMLElement>document.getElementById("flexIDWarenkorb")).appendChild(divCandy);
                divCandy.id = "divId" + index;
                console.log("divId" + index);
    
                //IMG IN DIV PACKEN
                let imgCandy: HTMLImageElement = document.createElement("img");
                imgCandy.src = localStorage.getItem("articles_bild" + index)!;
                divCandy.appendChild(imgCandy);
                console.log(imgCandy);
    
                //NAME
                let name: HTMLParagraphElement = document.createElement("h1");
                name.innerHTML = localStorage.getItem("articles_name" + index)!;
                divCandy.appendChild(name);
    
                //PREIS
                let candyPreis: HTMLParagraphElement = document.createElement("p");
                candyPreis.innerHTML = localStorage.getItem("articles_preis" + index)!;
                divCandy.setAttribute("preis", candyPreis.innerHTML);
                divCandy.appendChild(candyPreis);
    
                //BESCHREIBUNG
                let candybeschreibung: HTMLParagraphElement = document.createElement("p");
                candybeschreibung.innerHTML = localStorage.getItem("articles_beschreibung" + index)!;
                divCandy.appendChild(candybeschreibung);
    
                //BUTTON
                let button: HTMLButtonElement = document.createElement("button");
                button.innerHTML = "Löschen";
                divCandy.appendChild(button);
                button.addEventListener("click", handleRemoveArticle);
    
                //Gesamtpreis berechnen
                gesamtpreis = gesamtpreis + parseFloat(candyPreis.innerHTML);
                pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
                setGesamtpreis();
            }
    
            function handleRemoveArticle(_event: Event): void {
                //Gesampreis reduzieren
                let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
                gesamtpreis = gesamtpreis - parseFloat(preisString);
                pGesamtpreis.innerHTML = gesamtpreis.toFixed(2) + "€";
                setGesamtpreis();
    
                //Artikel Löschen
                ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
            }
            removeAll();
        }
    
        //Gesamtpreis in Header plazieren
        function setGesamtpreis(): void {
            document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        }
    
        
        function removeAll(): void {
            let remButton: HTMLDListElement = (<HTMLDListElement>document.getElementById("liRemoveAll"));
            remButton.addEventListener("click", handleRemoveAll);
        }
    
        function handleRemoveAll(_event: Event): void {
                for (let index: number = 0; index <= countTo - 1; index++) {
                    try {
                        (<HTMLDivElement>document.getElementById("divId" + index)).remove();
                    } catch (error) {
                        console.log(error);
                        console.log("Artikel wurde zuvor von Hand gelöscht und kann nicht mehr gefunden werden");
                    }
                    pGesamtpreis.innerHTML = 0 + "€";
                    setGesamtpreis();
                    localStorage.clear();
                }
                
          
                
            
           
        }
    }
