//pull employee info
const Employee = require("./Employee");

//extend off employee and add github to super
class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }
  //required get
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
