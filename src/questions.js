//grabbing classes
const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const { generateHtml } = require("./input");
const employees = [];

//gives two options of employee type when adding new employee
const roleSelect = [
  {
    type: "list",
    choices: ["Engineer", "Intern"],
    message: "What is your role?",
    name: "employeeRole",
  },
];

//inital prompt
const managerPrompt = [
  {
    type: "input",
    message: "What is your Managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNum",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    message: "Would you like to add another employee?",
    name: "continue",
  },
];

//if you choose to add an engineer prompt
const engineerPrompt = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    message: "Would you like to add another employee?",
    name: "continue",
  },
];

//if you choose to add an intern prompt
const internPrompt = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What school did you attend?",
    name: "school",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    message: "Would you like to add another employee?",
    name: "continue",
  },
];

//inital function
function start() {
  //calls manager promt and logs info
  inquirer.prompt(managerPrompt).then((response) => {
    const newManager = new Manager(
      response.name,
      response.id,
      response.email,
      "Manager",
      response.officeNum
    );
    employees.push(newManager);

    //reponding to prompt if you are adding another employee
    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml(employees);
    }
  });
}

function nextEmployee() {
  //calls role select promt chooses next type of employee to prompt
  inquirer.prompt(roleSelect).then((response) => {
    if (response.employeeRole === "Engineer") {
      engineerInput();
    } else {
      internInput();
    }
  });
}

function engineerInput() {
  //calls manager promt and logs info
  inquirer.prompt(engineerPrompt).then((response) => {
    const newEngineer = new Engineer(
      response.name,
      response.id,
      response.email,
      "Engineer",
      response.github
    );
    employees.push(newEngineer);

    //reponding to prompt if you are adding another employee
    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml(employees);
    }
  });
}

function internInput() {
  //calls manager promt and logs info
  inquirer.prompt(internPrompt).then((response) => {
    const newIntern = new Intern(
      response.name,
      response.id,
      response.email,
      "Intern",
      response.school
    );
    employees.push(newIntern);

    //reponding to prompt if you are adding another employee
    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml(employees);
    }
  });
}

module.exports = { start };
