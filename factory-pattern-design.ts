
interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}


class CheesePizza implements Pizza {
    prepare(): void {
        console.log("Preparing Cheese Pizza...");
    }

    bake(): void {
        console.log("Baking Cheese Pizza...");
    }

    cut(): void {
        console.log("Cutting Cheese Pizza...");
    }

    box(): void {
        console.log("Boxing Cheese Pizza...");
    }
}


class PepperoniPizza implements Pizza {
    prepare(): void {
        console.log("Preparing Pepperoni Pizza...");
    }

    bake(): void {
        console.log("Baking Pepperoni Pizza...");
    }

    cut(): void {
        console.log("Cutting Pepperoni Pizza...");
    }

    box(): void {
        console.log("Boxing Pepperoni Pizza...");
    }
}



//Factory
interface PizzaFactory {
    createPizza(pizzaType: string): Pizza;
}


class SimplePizzaFactory implements PizzaFactory {
    createPizza(pizzaType: string): Pizza {
        let pizza: Pizza;

        switch (pizzaType) {
            case 'cheese':
                pizza = new CheesePizza();
                break;
            case 'pepperoni':
                pizza = new PepperoniPizza();
                break;
            default:
                throw new Error('Invalid pizza type.');
        }

        return pizza;
    }
}





// Client code
class PizzaStore {
    private factory: PizzaFactory;

    constructor(factory: PizzaFactory) {
        this.factory = factory;
    }

    orderPizza(pizzaType: string): void {
        const pizza = this.factory.createPizza(pizzaType);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}

// Usage
const factory = new SimplePizzaFactory();
const pizzaStore = new PizzaStore(factory);

pizzaStore.orderPizza('cheese');
pizzaStore.orderPizza('pepperoni');
