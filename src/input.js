const Manager = require("../lib/Manager");
const fs = require("fs");

//creating fs.writeee html thingy
function generateHtml(response) {
  fs.writeFile(
    "index.html",
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
        <title>Document</title>
        </head>
        <body>
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Generator!</span>
        </div>
        </nav>
        ${buildCard}
        </body>
        </html>`,

    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}

function buildCard() {
  let employeeString = ``;
  employees.forEach((employee) => {
    if (employee.role === "Manager") {
      employeeString += `<div class="card" style="width: 18rem;">
             <img src="../assets/imgs/manager.jpg" class="card-img-top" alt="manager">
             <div class="card-body">
              <h5 class="card-title">Manager</h5>
             </div>
             <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.name}</li>
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.officeNum}</li>
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
              <li class="list-group-item">${employee.name}</li>
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item"> <a href= "https://github.com/${employee.github}"></a></li>
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
              <li class="list-group-item">${employee.name}</li>
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.school}</li>
            </ul>
            <div class="card-body">
            <a href="mailto:${employee.email}" class="card-link">${employee.email}</a>
            </div>
            </div>`;
    }
  });

  return employeeString;
}

module.exports = { generateHtml };
