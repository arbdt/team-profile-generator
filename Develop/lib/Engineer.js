// Engineer subclass definition
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        //call Employee constructor on basic parameters
        super(name, id, email);

        // set class-specific parameter
        this.github = github; 
      
    }
    // class-specific methods

    // function to get github ID
    getGithub() {
        return this.github;
    }
    
    // function to get role
    getRole() {
        return "Engineer";
    }
}

// make usable in other files
module.exports = Engineer;