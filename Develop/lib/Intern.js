// Intern subclass definition
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(nameInput, idInput, emailInput, schoolInput){
        //call Employee constructor on basic parameters
        super(nameInput, idInput, emailInput);

        // set class-specific parameter
        this.school = schoolInput; 
      
    }

    // class-specific methods

    // function to get github ID
    getSchool() {
        return this.school;
    }
    
    // function to get role
    getRole() {
        return "Intern";
    }
}

// make usable in other files
module.exports = Intern;