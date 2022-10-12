const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an object with name, id, role, github, and email.", () => {
    const obj = new Engineer(
      "hannah",
      "2",
      "alicia9790972@gmail.com",
      "engineer",
      "hannahhue"
    );
    expect(
      new Engineer(
        "hannah",
        "2",
        "alicia9790972@gmail.com",
        "engineer",
        "hannahhue"
      )
    ).toEqual(obj);
  });
});
