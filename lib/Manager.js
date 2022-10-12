const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNum) {
    super(name, id, email, role);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
