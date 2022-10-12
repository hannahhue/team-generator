const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

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

function start() {
  inquirer.prompt(employeePrompt).then((response) => generateHtml(response));

  inquirer.prompt();
}
