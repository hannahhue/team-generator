const Manager = require("../lib/Manager");
const fs = require("fs");
let employeeString = ``;

//creating fs.writeee html thingy
//pulls info from string into literal
function generateHtml(employees) {
  //pulling each chosen card
  //puts each card into following ${}
  buildCard(employees);
  //create new html
  fs.writeFile(
    "./dist/index.html",
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link
          rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
         />
        <link>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Team Gen</title>
        </head>
        <body>
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Generator!</span>
        </div>
        </nav>
        ${employeeString}
        </body>
        </html>`,

    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}

//decides what kind of card to make then fills in blanks
function buildCard(employees) {
  employees.forEach((employee) => {
    if (employee.role === "Manager") {
      employeeString += `<div class="card" style="width: 18rem;">
             <img src="../assets/imgs/manager.jpg" class="card-img-top" alt="manager">
             <div class="card-body">
              <h5 class="card-title">Manager</h5>
             </div>
             <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${employee.name}</li>
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Office Number: ${employee.officeNum}</li>
             </ul>
             <div class="card-body">
             <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
             </div>
             </div>`;
    } else if (employee.role === "Engineer") {
      employeeString += `<div class="card" style="width: 18rem;">
             <img src="../assets/imgs/engineer.jpg" class="card-img-top" alt="engineer">
             <div class="card-body">
               <h5 class="card-title">Engineer</h5>
             </div>
             <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${employee.name}</li>
              <li class="list-group-item">ID: ${employee.id}</li>
             </ul>
             <div class="card-body">
                <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
                <a href="https://github.com/${employee.github}" class="card-link">${employee.github}</a>
             </div>
             </div>`;
    } else {
      employeeString += `<div class="card" style="width: 18rem;">
            <img src="../assets/imgs/intern.jpg" class="card-img-top" alt="intern">
            <div class="card-body">
              <h5 class="card-title">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${employee.name}</li>
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">School: ${employee.school}</li>
            </ul>
            <div class="card-body">
            <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
            </div>
            </div>`;
    }
  });
}

module.exports = { generateHtml };
