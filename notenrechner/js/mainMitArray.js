let eingabeFelder = ["tfNote1","tfNote2","tfNote3","tfNote4","tfNote5","tfNote6"]
let noten = [];
let aktuelleEingabe;
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

//refactor auf -> notenAuslesen()

function tfAuslesen() {
    anzahlNoten = 0
    summe = 0

    for (let i = 0; i < eingabeFelder.length; i = i + 1) {
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefen(aktuelleEingabe);
// Schleife angelegt
    }

    ergebnis = summe/anzahlNoten; // Rechenschritt zum Ergebnis

    document.getElementById("ausgabe").innerHTML = ergebnis

    if (ergebnis < 6) {
        document.getElementById("ausgabe").style.color = "crimson";
    } else {
        if (ergebnis < 11) {
            document.getElementById("ausgabe").style.color = "purple";
        } else {
            document.getElementById("ausgabe").style.color = "green";
        }

    }

}
// Aenderung der Farbe des Ergebnisses

function eingabeUeberpruefen(punkte) {
    if (isNaN(punkte)){
    console.log("Keine Zahl");
} else {
    anzahlNoten = anzahlNoten + 1;
    summe = summe + punkte;
}
}

// Ergebnis ausrechnen