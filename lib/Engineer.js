const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, role);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
