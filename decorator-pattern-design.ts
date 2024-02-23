//Decorator
abstract class Pizza {
    abstract cost(size: string) : number
}
class Fagita extends Pizza {
    cost(size : string): number {

        switch(size){
            case "small": return 500
            case "medium": return 800
            case "large": return 1200

            default: throw Error("Invalid Size")

        }
    }
}

class KarachiFav extends Pizza {
    cost(size : string): number {

        switch(size){
            case "small": return 750
            case "medium": return 900
            case "large": return 1500

            default: throw Error("Invalid Size")
        }
    }
}


//Topping
abstract class Topping extends Pizza {
    pizza : Pizza
    constructor(pizz: Pizza){
        super()
        this.pizza = pizz
    }
}

class Mashroom extends Topping {

    constructor(pizz: Pizza){
        super(pizz)
    }

    cost(size : string): number {
        return this.pizza.cost(size) + 100
    }
}

class Berry extends Topping {

    constructor(pizz: Pizza){
        super(pizz)
    }

    cost(size : string): number {
        return this.pizza.cost(size) + 200
    }
}


const pizza = new Fagita()
const pizzaWithTopping = new Mashroom(new Berry(pizza))
console.log(pizzaWithTopping.cost("small"))