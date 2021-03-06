// import required modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// variables for file generation
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// sets of questions
//opening question
const enterMoreQuestion = {
    name: "enteringData",
    type: "confirm",
    message: "Do you want to add an employee?"
}

// employee type question
const entryTypeQuestion = {
    name: "employeeType",
    type: "list",
    message: "What type of employee are you describing?",
    choices: ["Manager", "Engineer", "Intern"]
};

// manager questions
const managerQuestions = [
    {
        name: "employeeName",
        type: "input",
        message: "What is the employee's name?",
        validate: validateAnswers
    },
    {
        name: "employeeID",
        type: "input",
        message: "What is the employee's ID number?",
        validate: validateAnswers
    },
    {
        name: "employeeEmail",
        type: "input",
        message: "What is their email address?",
        validate: validateAnswers
    },
    {
        name: "managerOffice",
        type: "input",
        message: "What is their office number?",
        validate: validateAnswers
    }
];

//engineer questions
const engineerQuestions = [
    {
        name: "employeeName",
        type: "input",
        message: "What is the employee's name?",
        validate: validateAnswers
    },
    {
        name: "employeeID",
        type: "input",
        message: "What is the employee's ID number?",
        validate: validateAnswers
    },
    {
        name: "employeeEmail",
        type: "input",
        message: "What is their email address?",
        validate: validateAnswers
    },
    {
        name: "engineerGithub",
        type: "input",
        message: "What is their Github username?",
        validate: validateAnswers
    }
];

//intern questions
const internQuestions = [
    {
        name: "employeeName",
        type: "input",
        message: "What is the employee's name?",
        validate: validateAnswers
    },
    {
        name: "employeeID",
        type: "input",
        message: "What is the employee's ID number?",
        validate: validateAnswers
    },
    {
        name: "employeeEmail",
        type: "input",
        message: "What is their email address?",
        validate: validateAnswers
    },
    {
        name: "internSchool",
        type: "input",
        message: "What is the name of their school?",
        validate: validateAnswers
    }
];

// array containing employees created
let employeeArray = [];

//function to valide question answers
function validateAnswers(answer){
    if (answer == ""){
        return "Please enter an answer.";
    } else {
        return true;
    }
}

//function containing question prompts
async function startQueries(){
    try{
        // ask overall question
        let moreEntriesAnswer = await inquirer.prompt(enterMoreQuestion);

        //if yes, ask what kind of employee
        if(moreEntriesAnswer.enteringData === true){
            askEmployeeType();
        }
        else {
            //stop asking and generate html file
            console.log("Compiling entries... Rendering Employee List...")
            // send employee data to HTML renderer
            let renderedHTML = render(employeeArray);
            // check if "output" folder exists and create it if not
            fs.mkdir("output", {recursive: true}, (err) => {
                if (err) {
                    return console.error(err);
                } else {
                    console.log("Output created.")
                }
            });
            // write to file
            fs.writeFileSync(outputPath, renderedHTML, "utf8");
        }

    }catch(errors){
        console.error(errors);
    }
}

// function to determine Employee object subtype
async function askEmployeeType(){
    try{
        // ask for employee type
        let employeeTypeAnswer = await inquirer.prompt(entryTypeQuestion);

        // if type is manager, ask manager questions
        if (employeeTypeAnswer.employeeType == "Manager"){
            // generate Manager using Manager Questions
            console.log("Creating Manager:");
            createManager();
        }
        // if employee is an Engineer
        else if (employeeTypeAnswer.employeeType == "Engineer"){
            console.log("Creating Engineer:");
            // ask Engineer questions 
            createEngineer();
        }
        // if employee is an intern
        else if (employeeTypeAnswer.employeeType == "Intern"){
            console.log("Creating Intern:");
            // ask intern questions
            createIntern();
        }
    }
    catch(errors){
        console.error(errors);
    }
}

// function to create Manager from input
async function createManager(){
    try{
        //ask Manager questions
        let managerAnswers = await inquirer.prompt(managerQuestions);

        //create new Manager instance
        let newManager = new Manager(managerAnswers.employeeName, managerAnswers.employeeID, managerAnswers.employeeEmail, managerAnswers.managerOffice);
        console.log("Manager created."); //confirming content for debugging

        // save to array
        employeeArray.push(newManager);

        //ask for more employees
        startQueries();
    }
    catch(errors){
        console.error(errors);
    }
}

// function to create Engineer from input
async function createEngineer(){
    try{
        //ask Engineer questions
        let engineerAnswers = await inquirer.prompt(engineerQuestions);

        //create new Engineer instance
        let newEngineer = new Engineer(engineerAnswers.employeeName, engineerAnswers.employeeID, engineerAnswers.employeeEmail, engineerAnswers.engineerGithub);
        console.log("Engineer created.");

        employeeArray.push(newEngineer); // save new Engineer to employee list

        startQueries(); // ask for more employees
    }
    catch(errors){
        console.error(errors);
    }
}

// function to create Intern from input
async function createIntern(){
    try{
        //ask Intern questions
        let internAnswers = await inquirer.prompt(internQuestions);

        //create new Intern instance
        let newIntern = new Intern(internAnswers.employeeName, internAnswers.employeeID, internAnswers.employeeEmail, internAnswers.internSchool);
        console.log("Intern created.");

        employeeArray.push(newIntern); // save new Intern to employee list

        startQueries(); // ask for more employees
    }
    catch(errors){
        console.error(errors);
    }
}

startQueries(); // run the app