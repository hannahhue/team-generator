const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an object with name, id, role, school, and email.", () => {
    const obj = new Intern(
      "hannah",
      "2",
      "alicia9790972@gmail.com",
      "employee",
      "school"
    );
    expect(
      new Intern("hannah", "2", "alicia9790972@gmail.com", "employee", "school")
    ).toEqual(obj);
  });
});
