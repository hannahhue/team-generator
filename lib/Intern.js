const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
