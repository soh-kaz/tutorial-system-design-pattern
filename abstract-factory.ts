
//Products
interface ICar {
    getInfo() : void
}
class DieselEngine implements ICar {
    getInfo(): void {
        console.log("Diesel wala Car")
    }
}
class ElectricEngine implements ICar {
    getInfo(): void {
        console.log("Electric wala Car")
    }
}
class PetrolEngine implements ICar {
    getInfo(): void {
        console.log("Petrol wala Car")
    }
}


//Factory
interface IFactory {
    create() : ICar
}
enum eCarType {
    DIESEL,
    PETROL,
    ELECTRIC
}
class FactoryClass {
    static make(type: eCarType)  {
        switch(type){
            case eCarType.DIESEL: return new DieselEngine()
            case eCarType.PETROL: return new PetrolEngine()
            case eCarType.ELECTRIC: return new ElectricEngine()

            default : throw Error("Invalid Engine Type")
        }
    }
}

class Tesla implements IFactory{
    create() : ICar {
        return new ElectricEngine()
    }
}

class BMW implements IFactory {
    create(): ICar {
        return new PetrolEngine()
    }
}

class Toyota implements IFactory {

    car : ICar
    constructor(type: eCarType){
        const carObj = FactoryClass.make(type)
        this.car = carObj
    }
    create(): ICar {
        return this.car
    }

}


const d = new Toyota(eCarType.ELECTRIC).create()
d.getInfo()