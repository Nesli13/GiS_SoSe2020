
namespace Aufgabe06 {
interface Süßigkeiten {
    img: string;
    name: string;
    preis: number;
    beschreibung: string;
    alt: string; 
    kategorien: number;
}
//Candy
let candy1: Süßigkeiten = {
    img: "pictures/candy1.jpeg", name: "Reese's Peanut Butter Cups 42g", preis: 0.99, beschreibung: "(2,36 €/100g)", alt: "Reese", kategorien: 1
};
let candy2: Süßigkeiten = {
     img: "pictures/candy2.jpg", name: "m&m's Dark Chocolate 286,3g", preis: 8.99, beschreibung: "(31,40 €/1kg)", alt: "m&m's", kategorien: 1
};
let candy3: Süßigkeiten = {
    img: "pictures/candy3.jpg", name: "Jelly Belly Bean Boozled Refill Flip-Top-Box 45g", preis: 2.49, beschreibung: "(5,53 €/100g)", alt: "Jelly", kategorien: 1
};
let candy4: Süßigkeiten = {
    img: "pictures/candy4.jpg", name: "Oreo Choc White 246g", preis: 2.99, beschreibung: "(1,22 €/100g)", alt: "Oreo", kategorien: 1
};
let candy5: Süßigkeiten = {
     img: "pictures/candy5.jpg", name: "Hershey's Cookies'n'Creme 43g", preis: 0.99, beschreibung: "(2,30 €/100g)", alt: "Hershey's", kategorien: 1
};
let candy6: Süßigkeiten = {
     img: "pictures/candy6.jpg", name: "Skittles Fruits 160g", preis: 1.19, beschreibung: "(0,74 €/100g)", alt: "Skittles", kategorien: 1
};
let candy7: Süßigkeiten = {
    img: "pictures/candy7.jpg", name: "Wonka Nerds Grape & Strawberry 46,7g", preis: 1.49, beschreibung: "(3,19 €/100g)", alt: "Wonka", kategorien: 1
};
let candy8: Süßigkeiten = {
     img: "pictures/candy8.jpg", name: "Barkleys Chocolate Mint 50g", preis: 1.99, beschreibung: "(3,98 €/100g)", alt: "Barkleys", kategorien: 1
};
let candy9: Süßigkeiten = {
    img: "pictures/candy9.jpg", name: "Haribo Sauerier Sauer 150er", preis: 5.79, beschreibung: "(4,29 €/1kg)", alt: "Haribo", kategorien: 1
};
let candy10: Süßigkeiten = {
    img: "pictures/candy10.jpg", name: "nimm2 Lolly 12er", preis: 1.49, beschreibung: "(1,24 €/100g)", alt: "nimm2", kategorien: 1
};
let candy11: Süßigkeiten = {
    img: "pictures/candy11.jpg", name: "Choclait Chips Himbeer 115g", preis: 1.99, beschreibung: "(1,73 €/100g)", alt: "Choclait", kategorien: 1
}; 
let candy12: Süßigkeiten = {
     img: "pictures/candy12.jpg", name: "Yogurette 24er", preis: 3.19, beschreibung: "(10,63 €/1kg)", alt: "Yogurette", kategorien: 1
};


//Scharf
let scharff: Süßigkeiten = {
    img: "pictures/scharff.jpg", name: "Doritos Chilli Heatwave 70g", preis: 1.99, beschreibung: "(2,84 €/100g)", alt: "Doritos", kategorien: 2
};
let scharf2: Süßigkeiten = {
     img: "pictures/scharf2.jpg", name: "Sallos X-Plosiv 150g", preis: 0.99, beschreibung: "(0,66 €/100g)", alt: "Sallos", kategorien: 2
};
let scharf3: Süßigkeiten = {
   img: "pictures/scharf3.jpg", name: "Snyder's Jalapeño 125g", preis: 1.99, beschreibung: "(1,59 €/100g)", alt: "Snyders", kategorien: 2
};
let scharf4: Süßigkeiten = {
   img: "pictures/scharf4.jpg", name: "Chio Tortillas Hot Chili 125g", preis: 1.59, beschreibung: "(1,27 €/100g)", alt: "Chio", kategorien: 2
};
let scharf5: Süßigkeiten = {
     img: "pictures/scharf5.jpg", name: "Khao Shong Wasabi Peanuts 140g", preis: 2.69, beschreibung: "(1,92 €/100g)", alt: "Khao", kategorien: 2
};
let scharf6: Süßigkeiten = {
     img: "pictures/scharf6.jpg", name: "Lay's Bugles Sweet Chilli 100g", preis: 1.49, beschreibung: "(1,49 €/100g)", alt: "Lays", kategorien: 2
};
let scharf7: Süßigkeiten = {
     img: "pictures/scharf7.jpg", name: "XOX Salsa Dip 300ml", preis: 1.99, beschreibung: "(6,63 €/1l)", alt: "XOX", kategorien: 2
};
let scharf8: Süßigkeiten = {
    img: "pictures/scharf8.jpg", name: "Crunchips Roasted Chili & Grilled Cheese 150g ", preis: 1.69, beschreibung: "(1,13 €/100g)", alt: "Crunchips", kategorien: 2
};
let scharf9: Süßigkeiten = {
     img: "pictures/scharf9.jpg", name: "Jimmy's Popcorn Sweet Chili BBQ with Tabasco 90g", preis: 1.99, beschreibung: "(2,21 €/100g)", alt: "Jimmys", kategorien: 2
};
let scharf10: Süßigkeiten = {
   img: "pictures/scharf10.jpg", name: "Lindt Excellence Chili 100g", preis: 2.29, beschreibung: "(2,29 €/100g)", alt: "Lindt", kategorien: 2
};
let scharf11: Süßigkeiten = {
    img: "pictures/scharf11.jpg", name: "LPepper-King Habanero Popcorn 90g", preis: 2.19, beschreibung: "(2,43 €/100g)", alt: "Lpepper", kategorien: 2
};
let scharf12: Süßigkeiten = {
   img: "pictures/scharf12.jpg", name: "NicNac's Hot 110g", preis: 1.49, beschreibung: "(1,35 €/100g)", alt: "NicNac", kategorien: 2
};
//Array
export let süßigkeiten: Süßigkeiten[] = [ candy1, candy2, candy3, candy4, candy5, candy6, candy7, candy8, candy9, candy10, candy11, candy12, scharff, scharf2, scharf3, scharf4, scharf5, scharf6, scharf7, scharf8, scharf9, scharf10, scharf11, scharf12 ];

}
