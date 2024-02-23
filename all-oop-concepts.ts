



//--------------------------- CLASS & OBJECT ----------------------------

class Car {
    // Properties
    protected make: string;
    protected model: string;
    private year: number;

    // Constructor
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method
    getMakeAndModel(): string {
        return `${this.make} ${this.model}`;
    }
}


const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getMakeAndModel());



// ---------------------------  INHERITENCE  -------------------------------
class ElectricCar extends Car {
    private range: number;

    constructor(make: string, model: string, year: number, range: number) {
        super(make, model, year);
        this.range = range;
    }

    // Overriding method
    getMakeAndModel(): string {
        return `${this.make} ${this.model} (Electric)`;
    }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2023, 400);
console.log(myElectricCar.getMakeAndModel());




// ------------------------- ENCAPSULATION ---------------------------------
class Account {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}


// ------------------------- POLYMORPHISM ------------------------------------
class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
    console.log(shape.area());
});





// ---------------------------------- ABSTRACTIONS -------------------------------------
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const myDog = new Dog();
myDog.makeSound();

const myCat = new Cat();
myCat.makeSound();


