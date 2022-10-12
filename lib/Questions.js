//grabbing classes
const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const employees = [];

const roleSelect = [
  {
    type: "list",
    choices: ["Engineer", "Intern"],
    message: "What is your role?",
    name: "employeeRole",
  },
];

const managerPrompt = [
  {
    type: "input",
    message: "What is your name?",
    name: "employeeName",
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

const engineerPrompt = [
  {
    type: "input",
    message: "What is your name?",
    name: "employeeName",
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

const internPrompt = [
  {
    type: "input",
    message: "What is your name?",
    name: "employeeName",
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

function start() {
  inquirer.prompt(managerPrompt).then((response) => {
    const newManager = new Manager(
      response.name,
      response.id,
      response.email,
      "Manager",
      response.officeNum
    );
    employees.push(newManager);

    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml();
    }
  });
}

function nextEmployee() {
  inquirer.prompt(roleSelect).then((response) => {
    if (response.employeeRole === "Engineer") {
      engineerInput();
    } else {
      internInput();
    }
  });
}

function engineerInput() {
  inquirer.prompt(engineerPrompt).then((response) => {
    const newEngineer = new Engineer(
      response.name,
      response.id,
      response.email,
      "Engineer",
      response.github
    );
    employees.push(newEngineer);

    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml();
    }
  });
}

function internInput() {
  inquirer.prompt(internPrompt).then((response) => {
    const newIntern = new Intern(
      response.name,
      response.id,
      response.email,
      "Intern",
      response.school
    );
    employees.push(newIntern);

    if (response.continue === "Yes") {
      nextEmployee();
    } else {
      generateHtml();
    }
  });
}

function generateHtml(response) {}

module.exports = { start };
