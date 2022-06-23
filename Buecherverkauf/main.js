class buecher{
    constructor(Seiten, Autor, Art, Exemplare) {
        this.Seitenanzahl = Seiten
        this.Autor = Autor
        this.Bund = Art
        this.Anzahl = Exemplare
    }

    verfuegbar(){
        if (this.Anzahl >= 1){
            console.log("Du kannst dieses Buch kaufen")
        }
    }

    verkauft(){
        this.Anzahl = this.Anzahl - 1
    }
}


let lager = []

function init() {
    let FiftyShadesOfGrey = new buecher("356", "E. L. James", "gebunden", "16")
    let Outlander = new buecher("1658", "Diana Gabaldon", "taschenbuch", "56")
    let HarryPotter = new buecher("795", "J. K. Rowling", "gebunden", "45")
    let GregsTagebuch = new buecher("786", "Jeff Kinney", "digital","564" )

    lager.push(FiftyShadesOfGrey, Outlander, HarryPotter, GregsTagebuch)
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i])
    }

}
