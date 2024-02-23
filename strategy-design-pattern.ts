
interface AttackStrategy {
    attack(): void;
}


class SwordAttack implements AttackStrategy {
    attack(): void {
        console.log("Attacking with a sword!");
    }
}


class BowAttack implements AttackStrategy {
    attack(): void {
        console.log("Attacking with a bow!");
    }
}


class MagicAttack implements AttackStrategy {
    attack(): void {
        console.log("Casting a magic spell!");
    }
}

// Context class that will use the attack strategy
class Character {
    private attackStrategy: AttackStrategy;

    constructor(attackStrategy: AttackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    
    setAttackStrategy(attackStrategy: AttackStrategy): void {
        this.attackStrategy = attackStrategy;
    }

    performAttack(): void {
        this.attackStrategy.attack();
    }
}


const warrior = new Character(new SwordAttack());
const archer = new Character(new BowAttack());
const mage = new Character(new MagicAttack());


warrior.performAttack(); 
archer.performAttack();  
mage.performAttack();    


warrior.setAttackStrategy(new BowAttack());
warrior.performAttack();
