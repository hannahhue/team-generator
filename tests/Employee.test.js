const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an object with name, id, role, and email.", () => {
    const obj = new Employee(
      "hannah",
      "2",
      "alicia9790972@gmail.com",
      "employee"
    );
    expect(
      new Employee("hannah", "2", "alicia9790972@gmail.com", "employee")
    ).toEqual(obj);
  });
});
