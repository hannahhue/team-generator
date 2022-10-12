const Employee = require("./employee");

//extend off employee and add officenum to super
class Manager extends Employee {
  constructor(name, id, email, role, officeNum) {
    super(name, id, email, role);
    this.officeNum = officeNum;
  }
  //required get
  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
