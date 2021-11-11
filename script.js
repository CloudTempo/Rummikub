/*Diese Variable dient zur Zählung der bisher hinzugefügten Spieler */
var idCounter = 0;
var gameStart = new Boolean(false);

class player {
    constructor(nickname, points, wins, totalPoints, totalWins, winner) {
        this.nickname = nickname;
        this.points = points;
        this.wins = wins;
        this.totalPoints = totalPoints;
        this.totalWins = totalWins;
        this.winner = winner;
    }
}

/**
 * Players
 */
var Maria = new player("Omi", 0, 0, 0, 0, false);
var Joshua = new player("Joshua", 0, 0, 0, 0, false);
var Klaus = new player("Papi", 0, 0, 0, 0, false);
var Fuko = new player("Fupi", 0, 0, 0, 0, false);
var Stephanie = new player("Steffi", 0, 0, 0, 0, false);
var Adriana = new player("Adriana", 0, 0, 0, 0, false);
var Faris = new player("Faris", 0, 0, 0, 0, false);
var Pia = new player("QueenPi", 0, 0, 0, 0, false);
var Karen = new player("Karen", 0, 0, 0, 0, false);
var Maia = new player("Maia", 0, 0, 0, 0, false);
//Und dann add to map oder so

addToGame = function(buttonName) {
/* Ich muss das Attribute des Buttons abrufen und dann im switch case 
nachchecken.
Bei create Table muss*/

//var button = button.getElementById("button");

//Hier wird hoffentlich der Name übergeben

//var buttonName = button.name;

//var x = buttonName;

console.log(buttonName);

    switch (buttonName) {
        case 'Omi':
        createTable(Maria.nickname);
        break;

        case 'Joshua':
        createTable(Joshua.nickname);
        break;

        case 'Papi':
        createTable(Klaus.nickname);
        break;

        case 'Fupi': 
        createTable(Fuko.nickname);
        break;

        case 'Steffi':
        createTable(Stephanie.nickname);
        break;

        case 'Adriana' :
        createTable(Adriana.nickname);
        break;

        case 'Faris':
        createTable(Faris.nickname);
        break;

        case 'Pia':
        createTable(Pia.nickname);
        break;

        case 'Karen':
        createTable(Karen.nickname);
        break;

        case 'Maia':
        createTable(Maia.nickname);
        break;
    }
}
/**
 * creates a row for every player added
 * max 4 players feature with variable
 */
createTable = function(/*string*/ person) {

    idCounter++;

    //SCHRITT 1 Tabelle + TabellenKopf
    var th = document.createElement('th');
    th.setAttribute("id", "tableHead" + idCounter);

    //SCHRITT 2 Buttons einfügen + disable + als Kind von th.
    var button = document.createElement("button");
    button.setAttribute("disabled", true);
    th.appendChild(button);

    //SCHRITT 3 Inhalt des Tabellenkopfes
    button.insertAdjacentText('beforeend', person);

    document.getElementById('tableRow').appendChild(th);

}

/**
 * Diese lösch Funktion löscht den zuletzt hinzugefügten Spieler
 */
removeAddedPlayer = function() {
    /*Ich hole immer wieder einen Player, der den mit einer Zahl versehen
      wird. So weiß man Welcher Player, welche Nummer hat.*/

    if (idCounter == 0) {
        alert("Es wurden noch keine Spieler hinzugefügt!!");
    } else {
        idCounter--;
        document.getElementById("tableRow").deleteCell(idCounter);
        console.log(idCounter);
    }
}

startGame = function(){

    var exists = document.getElementById('tableHead2');
    if (exists == null) {
        alert("Es müssen mindestens 2 Spieler hinzugefügt worden sein!");
        return;
    } else {
        /*Damit der "rundeBeenden'-Button auch gedrückt werden kann." */
        document.getElementById("rundeBeenden").removeAttribute("disabled");
        document.getElementById("punkte").style.border = "2px solid #432534";
    }
    
    /*Transition effect für dem Stern in css https://www.w3schools.com/css/css3_transitions.asp */
    /*Objekte*/
    
    /*Runde beendet mit alert nach Punkten fragen? yep.
    */
}

rundeBeenden = function() {

    /* In jede von den Spalten eine Textarea? */
    console.log("Die 'rundeBeenden' Funktion wurde aufgerufen!");
    document.getElementById("punkteStand").innerHTML = "Wer hat gewonnen?";
    document.getElementById("punkteStand").style = "color: #c44900;"

    for (var i = 1; i > idCounter; i++) {
        var person = document.getElementById("tableHead"+i).innerHTML;

        if (person.winner == false) {

            var pointsCheck = prompt("Wie viele Punkte hat " + person + " ?", "20");
            if (confirm(person + " hat " + pointsCheck + " Punkte?")) {
                person.points = pointsCheck;
            } else {
                
            }
        }
        
    }

    /*document.getElementById("punkteStand").innerHTML = "Punktestand";
    document.getElementById("punkteStand").removeAttribute("");
    /*Am Ende wieder umändern zu "Punktestand" */
}

/**
 * Nach jeder vollendeten Runde wird eine neue Zeile erstellt
 */
result = function() {
    /*hier kommt ein prompt rein für jeden Mitspieler.
    Vielleicht zählt die Methode die Tabellen Zeilen oder so bevor
    es los geht. Und dann werden in der Schleife die prompts
    aufgerufen.
    "And now for + player4 + !"
    */
}