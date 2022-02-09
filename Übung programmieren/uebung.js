let beliebigerString = "Hallo"
let eineZahl = 2
let nocheineZahl = 5
let ergebnis = 3
let eineZahlmitKomma = 11.5

function rechenspiele() {
    ergebnis = eineZahl * nocheineZahl
    if (ergebnis > eineZahlmitKomma) {
        console.log(ergebnis - eineZahlmitKomma);
    } else {
        console.log("Das Ergebnis ist zu klein")
    }
}
