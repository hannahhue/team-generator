const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const roleSelect = [
  {
    type: "list",
    choices: ["Employee", "Engineer", "Intern"],
    message: "What is your role?",
    name: "employeeRole",
  },
];

const employeePrompt = [
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
];

function start() {
  inquirer.prompt(managerPrompt).then((response) => generateHtml(response));
  inquirer.prompt(roleSelect).then((response) => {
    if (response.role === "Employee") {
      inquirer
        .prompt(employeePrompt)
        .then((response) => generateHtml(response));
    } else if (response.role === "Engineer") {
      inquirer
        .prompt(engineerPrompt)
        .then((response) => generateHtml(response));
    } else {
      inquirer.prompt(internPrompt).then((response) => generateHtml(response));
    }
  });
}

module.exports = { start };
