class Joueur 
    attr_accessor :name :birthdate

    def self.age
        return (2022 - :birthdate)
    end
end

player1 = Joueur.new(name: "Babar", birthdate: "1998")

player1.name
player1.age