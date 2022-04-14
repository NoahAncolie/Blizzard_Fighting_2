//--Initialisation des Classes joueurs ===> Class principale et extended--
class Character {
    constructor(hp, dmg, mana, status) {
        this.hp = hp
        this.dmg = dmg
        this.mana = mana
        this.status = status
    }
    dealDamage = (victim) => {
        //Vérifier si l'ennemi à été protégé par son Coup Special et appliquer les dégats en fonction de leur protection
        if (victim.status === "protected" && victim.constructor.name === "Assassin") {
            console.log("The Assassin is protected during this tour. No damages inflicted")
        } else if (victim.status === "protected" && victim.constructor.name === "Fighter") {
            victim.hp -= this.dmg - 2
            console.log(`${this.constructor.name} inflige ${this.dmg - 2} damage points to ${victim.constructor.name}`)
        } else {
            victim.hp -= this.dmg
            console.log(`${this.constructor.name} inflige ${this.dmg} damage points to ${victim.constructor.name}`) 
        }
        //Vérifier l'état du character (encore en vie ou non ?)
        if (victim.hp <= 0) {
            this.mana += 20
            console.log(`${victim.constructor.name} is dead. ${this.constructor.name} get +20mana`)
            victim.status = "loser"
        }
        return true
    }
}

class Fighter extends Character {
    constructor(hp = 12, dmg = 4, mana = 40, status = "playing") {
        super(hp, dmg, mana, status)
        this.manaCost = 20
    }
    special = (victim) => {
        //Vérifier si l'ennemi à été protégé par son Coup Special et appliquer les dégats en fonction de leur protection
        if (victim.status === "protected") {
            console.log("The Assassin is protected during this tour. No damages inflicted")
        } else {
            victim.hp -= this.dmg
            console.log(`Fighter uses Dark Vision. ${victim.constructor.name} lose 5hp.`) 
        }
        this.mana -= this.manaCost
        this.status = "protected"
        if (victim.hp <= 0) {
            this.mana += 20
            console.log(`${victim.constructor.name} is dead. ${this.constructor.name} get +20mana`)
            victim.status = "loser"
        }
        return (5)
    }
}

class Paladin extends Character {
    constructor(hp = 16, dmg = 3, mana = 160, status = "playing") {
        super(hp, dmg, mana, status)
        this.manaCost = 40
    }
    special = (victim) => {
        //Vérifier si l'ennemi à été protégé par son Coup Special et appliquer les dégats en fonction de leur protection
        if (victim.status === "protected" && victim.constructor.name === "Assassin") {
            console.log("The Assassin is protected during this tour. No damages inflicted")
        } else if (victim.status === "protected" && victim.constructor.name === "Fighter") {
            victim.hp -= this.dmg - 2
            console.log(`${this.constructor.name} inflige ${this.dmg - 2} damage points to ${victim.constructor.name}`)
        } else {
            victim.hp -= this.dmg
            console.log(`Paladin uses Healing Lightning. ${victim.constructor.name} lose 4hp.`)
        }//Fin de vérification
        this.hp += 5
        this.mana -= this.manaCost
        //Vérifier l'état de l'ennemi
        if (victim.hp <= 0) {
            this.mana += 20
            console.log(`${victim.constructor.name} is dead. ${this.constructor.name} get +20mana`)
            victim.status = "loser"
        }//Fin de vérification
        return (4)
    }
}

class Monk extends Character {
    constructor(hp = 8, dmg = 2, mana = 200, status = "playing") {
        super(hp, dmg, mana, status)
        this.manaCost = 25
    }
    special = (victim) => {
        this.hp += 8
        this.mana -= this.manaCost
        console.log("Monk uses Heal and get +8hp")
        return (0)
    }
}

class Berzerker extends Character {
    constructor(hp = 8, dmg = 4, mana = 0, status = "playing") {
        super(hp, dmg, mana, status)
    }
    special = (victim) => {
        this.hp -= 1
        this.dmg += 1
        console.log("Berzerker uses Rage and lose 1hp. Damage +1")
        return (0)
    }
}

class Assassin extends Character {
    constructor(hp = 6, dmg = 6, mana = 20, status = "playing") {
        super(hp, dmg, mana, status)
        this.manaCost = 20
    }
    special = (victim) => {
        //Vérifier si l'ennemi à été protégé par son Coup Special et appliquer les dégats en fonction de leur protection
        if (victim.status === "protected") {
            victim.hp -= this.dmg - 2
            console.log(`${this.constructor.name} inflige ${this.dmg - 2} damage points to ${victim.constructor.name}`)
        } else {
            victim.hp -= this.dmg
            console.log(`Assassin uses Shadow Hit. ${victim.constructor.name} lose 7hp`)
        }//Fin de vérification
        this.mana -= this.manaCost
        this.status = "protected"
        //Vérifier l'état de l'ennemi
        if (victim.hp <= 0) {
            this.mana += 20
            console.log(`${victim.constructor.name} is dead. ${this.constructor.name} get +20mana`)
            victim.status = "loser"
        }//Fin de vérification
        return (7)
    }
}

//--------------AJOUT SUPLÉMENTAIRE--------------
class Wizard extends Character {
    constructor(hp = 10, dmg = 2, mana = 200, status = "playing") {
        super(hp, dmg, mana, status)
        this.manaCost = 25
    }
    special = (victim) => {
        //Vérifier si l'ennemi à été protégé par son Coup Special et appliquer les dégats en fonction de leur protection
        if (victim.status === "protected" && victim.constructor.name === "Assassin") {
            console.log("The Assassin is protected during this tour. No damages inflicted")
        } else if (victim.status === "protected" && victim.constructor.name === "Fighter") {
            victim.hp -= this.dmg - 2
            console.log(`${this.constructor.name} inflige ${this.dmg - 2} damage points to ${victim.constructor.name}`)
        } else {
            victim.hp -= this.dmg
            console.log(`Wizard uses Fire Ball. ${victim.constructor.name} lose 7hp.`) 
        }//Fin de vérification
        this.mana -= this.manaCost
        //Vérifier l'état de l'ennemi
        if (victim.hp <= 0) {
            this.mana += 20
            console.log(`${victim.constructor.name} is dead. ${this.constructor.name} get +20mana`)
            victim.status = "loser"
        }//Fin de vérification
        return (4)
    }
}
//--------------FIN AJOUT SUPLÉMENTAIRE--------------
//--Fin de l'initialisation de Class joueurs--

//--Initialisation des 5 constantes player Et de l'Array players--
const Grace = new Fighter()
const Ulder = new Paladin()
const Moana = new Monk()
const Draven = new Berzerker()
const Carl = new Assassin()
const Hagrid = new Wizard()
let players = [Grace, Ulder, Moana, Draven, Carl/*,Hagrid*/] //décommenter Hagrid pour Jouer avec un wizard
//--Fin de l'initialisation des constantes--

//--Fonctions de visualisation--
function watchStats() {
    if (document.getElementsByClassName("display-stats")[0]) {
        document.getElementsByClassName("display-stats")[0].remove()
    }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<div class='display-stats'></div>")
    players.forEach(player => {
        document.getElementsByClassName("display-stats")[0].insertAdjacentHTML("beforeend", `<h3><b style="color : green">${player.constructor.name}</b> est à : <b style="color:red">${player.hp}</b>hp et <b style="color: blue">${player.mana}</b> mana. --${player.status}--</h3>`)
    })
}
//--Fin des fonctions--

//--Initialisation des Class de jeux--
//new Game : définit les contours de la partie (Le nombre de tour et la fin de la partie) retourne False lorsqu'il n'y a plus de tours à jouer
class Game {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft
    }
    newTurn = () => {                                                                               //Décide de lanser un nouveau tour
        if (this.turnLeft === 0 || players.filter(player => player.status != "loser").length === 1) {
            players.map(player => {if(player.status != "loser"){player.status = "winner"}})
            return false
        } else {
            this.turnLeft -= 1
            let turn = new Turn()
            turn.startTurn()
            return true
        }
    }
}
//new Turn : appelé dans Game.newTurn cette class s'occupe de chaque tour de jeu.                   (Choisir --> Joueur, Ennemi, Attaque).
class Turn {
    startTurn = () => {                                                                             //démarage d'un tour
        players.map(player => { if ( player.status != "loser" ){ player.status = "playing" }})
        while (players.filter(player => player.status == "playing").length > 0) {                   //boucle autour des joueurs
            watchStats()
            let player = this.choosePlayer()
            console.log(`it's time for the ${player.constructor.name} to play`)
            this.playAttack(player, this.chooseEnnemy(player))
        }
    }
    playAttack = (player, ennemy) => {                                                              //choisir l'attaque
        let move = prompt("What will you do ? Attack (a) : Special (s)")
        if (move === "a"){
            player.dealDamage(ennemy)
        } else if (move === "s") {
            player.special(ennemy)
        }else {
            this.playAttack(player, ennemy)
        }
    }
    chooseEnnemy = (player) => {                                                                    //choisir l'ennemi
        let playerIndex = prompt("Who is your target ? Fighter (1), Paladin (2), Monk (3), Berzerker (4) ou Assassin (5) ?")
        if (isNaN(Number(playerIndex)) || Number(playerIndex) > players.length || player.constructor.name === players[Number(playerIndex) - 1].constructor.name || players[Number(playerIndex - 1)].status === "loser") {
            return this.chooseEnnemy(player)
        } else {
            return players[Number(playerIndex) - 1]
        }
    }
    choosePlayer = () => {                                                                          //choisir le joueur
        let random = Math.floor(Math.random() *  players.length)
        if (players[random].status === "playing") {
            players[random].status = "played"
            return players[random]
        } else {
            return this.choosePlayer()
        }
    }
}
//--Fin de l'initialisation des class de jeu--

//--Lancement du jeu--
// const play = new Game()
// console.log("--- The Game Start ! ---")
// while(play.newTurn()){
//     console.log(`It's turn ${11 - play.turnLeft}`)
// }
//--Fin de lancement du jeu--




//--------------AJOUT SUPLÉMENTAIRE IA--------------
//--Mêmes classes Games qu'au dessus mais avec de l'IA-- (randomisation des attaques sur 4/5 personnages)
class GameAI {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft
    }
    newTurn = () => {                                                                               //Décide de lanser un nouveau tour
        if (this.turnLeft === 0 || players.filter(player => player.status != "loser").length === 1) {
            players.map(player => {if(player.status != "loser"){player.status = "winner"}})
            return false
        } else {
            this.turnLeft -= 1
            let turn = new TurnAI(1)
            turn.startTurn()
            return true
        }
    }
}

class TurnAI {
    constructor(index) {
        this.myIndex = index
    }
    startTurn = () => {                                                                             //démarage d'un tour
        players.map(player => { if ( player.status != "loser" ){ player.status = "playing" }})
        while (players.filter(player => player.status == "playing").length > 0) {                   //boucle autour des joueurs
            watchStats()
            let player = this.choosePlayer()
            console.log(`it's time for the ${player.constructor.name} to play`)
            this.playAttack(player, this.chooseEnnemy(player))
        }
    }
    playAttack = (player, ennemy) => {                                                                  //choisir l'attaque
        let aiChoice = Math.floor(Math.random() * 1)
        if (player === players[this.myIndex] ) {
            let move = prompt("What will you do ? Attack (a) : Special (s)")
            if (move === "a"){
                player.dealDamage(ennemy)
            } else if (move === "s") {
                player.special(ennemy)
            }else {
                this.playAttack(player, ennemy)
            }
        } else {
            aiChoice != 1 ? player.dealDamage(ennemy) : player.special(ennemy)
        }
    }
    chooseEnnemy = (player) => {
        let playerIndex
        if (player === players[this.myIndex]) {                                                                    //choisir l'ennemi
            playerIndex = prompt("Who is your target ? Fighter (1), Paladin (2), Monk (3), Berzerker (4) ou Assassin (5) ?")
        } else {
            playerIndex = Math.floor(Math.random() * players.length + 1)
        }
        if (isNaN(Number(playerIndex)) || Number(playerIndex) > players.length || player.constructor.name === players[Number(playerIndex) - 1].constructor.name || players[Number(playerIndex - 1)].status === "loser") {
            return this.chooseEnnemy(player)
        } else {
            return players[Number(playerIndex) - 1]
        }
    }
    choosePlayer = () => {                                                                          //choisir le joueur
        let random = Math.floor(Math.random() *  players.length)
        if (players[random].status === "playing") {
            players[random].status = "played"
            return players[random]
        } else {
            return this.choosePlayer()
        }
    }
}
//--Fin des classes games--

//--Lancement de partie
const play = new GameAI()
console.log("--- The Game Start ! ---")
while(play.newTurn()){
    console.log(`It's turn ${11 - play.turnLeft}`)
    watchStats()
}
//-- fin de lancement de partie

//--------------FIN AJOUT SUPLÉMENTAIRE AI--------------