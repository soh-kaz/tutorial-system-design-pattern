// Abstract Product: Component Interface
interface Component {
    info(): string;
}

// Concrete Products: Components
class CPU implements Component {
    info(): string {
        return "CPU";
    }
}


// Concrete Products: Additional Components
class RGBKeyboard implements Component {
    info(): string {
        return "RGB Keyboard";
    }
}

class ExtraCoolingSystem implements Component {
    info(): string {
        return "Extra Cooling System";
    }
}


// Abstract Factory: Device Factory Interface
interface DeviceFactory {
    createCPU(): Component;
    createAdditionalComponents(): Component[];
}

// Concrete Factories: Laptop Factory
class LaptopFactory implements DeviceFactory {
    createCPU(): Component {
        return new CPU();
    }
    createAdditionalComponents(): Component[] {
        return [];
    }
}

// Concrete Factories: Gaming Laptop Factory
class GamingLaptopFactory implements DeviceFactory {
    createCPU(): Component {
        return new CPU();
    }

    createAdditionalComponents(): Component[] {
        return [new RGBKeyboard(), new ExtraCoolingSystem()];
    }
}









// Builder Interface
interface DeviceBuilder {
    buildCPU(): void;
    buildAdditionalComponents(): void;
    getDevice(): Device;
}

// Director for building devices
class DeviceDirector {
    construct(builder: DeviceBuilder): Device {
        builder.buildCPU();
        builder.buildAdditionalComponents();
        return builder.getDevice();
    }
}

// Product: Device
class Device {
    private components: Component[] = [];

    addComponent(component: Component): void {
        this.components.push(component);
    }

    showComponents(): void {
        console.log("Device components:");
        this.components.forEach(component => console.log(component.info()));
    }
}