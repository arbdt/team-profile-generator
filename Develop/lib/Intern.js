// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(nameInput, idInput, emailInput, schoolInput){
        //call Employee constructor on basic parameters
        super(nameInput, idInput, emailInput);

        // set class-specific parameter
        this.school = schoolInput; 
      
    }

    // function to get name
    getName() {
        return this.name;
    }
    
    // function to get ID
    getId() {
        return this.id;
    }
    
    // function to get email
    getEmail() {
        return this.email;
    }

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