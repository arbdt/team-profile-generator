// Manager subclass definition
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(nameInput, idInput, emailInput, officeInput){
        //call Employee constructor on basic parameters
        super(nameInput, idInput, emailInput);

        // set class-specific parameter
        this.officeNumber = officeInput; 
      
    }

    // class-specific methods

    // function to get office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    // function to get role
    getRole() {
        return "Manager";
    }
}

// make usable in other files
module.exports = Manager;// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
