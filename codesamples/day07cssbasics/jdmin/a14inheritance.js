// Base Class: Machine
class Machine {
    constructor(name, serialNumber, powerStatus) {
        this.name = name;
        this.serialNumber = serialNumber;
        this.powerStatus = powerStatus;
    }

    powerOn() {
        this.powerStatus = true;
        console.log(`${this.name} is now ON.`);
    }

    powerOff() {
        this.powerStatus = false;
        console.log(`${this.name} is now OFF.`);
    }

    getStatus() {
        return `${this.name} (Serial: ${this.serialNumber}) is ${this.powerStatus ? "ON" : "OFF"}.`;
    }

    


}



// Subclass: CNC Machine (inherits from Machine)
class CNCMachine extends Machine {
    constructor(name, serialNumber, powerStatus, toolType) {
        super(name, serialNumber, powerStatus); // Call the parent class constructor
        this.toolType = toolType; // Additional property for CNC machine
    }

    setToolType(toolType) {
        this.toolType = toolType;
        console.log(`${this.name} is now set up with the ${this.toolType} tool.`);
    }

    // Override the getStatus method to include tool type info
    getStatus() {
        return `${super.getStatus()} Tool Type: ${this.toolType}.`;
    }
}

// Subclass: 3D Printer (inherits from Machine)
class Printer3D extends Machine {
    constructor(name, serialNumber, powerStatus, filamentType) {
        super(name, serialNumber, powerStatus); // Call the parent class constructor
        this.filamentType = filamentType; // Specific to 3D Printer
    }

    loadFilament(filamentType) {
        this.filamentType = filamentType;
        console.log(`${this.name} is now loaded with ${this.filamentType} filament.`);
    }

    // Override the getStatus method to include filament type info
    getStatus() {
        return `${super.getStatus()} Filament Type: ${this.filamentType}.`;
    }
}





// Create objects

const cnc = new CNCMachine('CNC Lathe', 'CNC1234', false, 'Lathe');
const printer = new Printer3D('XYZ Printer', '3D1234', false, 'PLA');

// Use the methods
cnc.powerOn();//function of super class
cnc.setToolType('Milling');  //function of the subclass
console.log(cnc.getStatus());  // function of the subclass
console.log(cnc.transmitdata())

printer.powerOn();
printer.loadFilament('ABS');
console.log(printer.getStatus());
