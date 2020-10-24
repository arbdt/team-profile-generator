// Employee base class definition
class Employee {
    //constructor
    constructor(name, id, email){
        this.name = name; //set employee name
        this.id = id; // set employee ID
        this.email = email; // set employee email
    }

    // function to get name
    getName() {
        return this.name;
    }
    
    //function to get ID
    getId() {
        return this.id;
    }
    
    //function to get email
    getEmail() {
        return this.email;
    }
    
    //function to get role
    getRole() {
        return "Employee";
    }
}

// make usable in other files
module.exports = Employee;