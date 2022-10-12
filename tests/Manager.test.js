const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create an object with name, id, role, officeNum and email.", () => {
    const obj = new Manager(
      "hannah",
      "2",
      "alicia9790972@gmail.com",
      "employee",
      "2"
    );
    expect(
      new Manager("hannah", "2", "alicia9790972@gmail.com", "employee", "2")
    ).toEqual(obj);
  });
});
