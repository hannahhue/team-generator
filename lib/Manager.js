const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNum) {
    super(name, id, email, role);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
