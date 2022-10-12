//pull employee info
const Employee = require("./Employee");

//extend off employee and add school to super
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
