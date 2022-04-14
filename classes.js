class Joueur {
    constructor(name, birthdate) {
        this.name = name
        this.birthdate = birthdate
    }

    age = (message) => {
        console.log(message)
        return (2022 - this.birthdate)
    }
}

let player1 = new Joueur("Babar", "1998")

player1.name
player1.age()

export default blablabla