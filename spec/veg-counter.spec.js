const countVeg = require("../katas/veg-counter");
const { expect } = require("chai");

describe.only("countVeg", () => {
  it("returns 0 if passed an empty array", () => {
    const total = countVeg([]);
    const expected = 0;
    expect(total).to.eql(expected);
  });
  it("returns 0 if passed an array but no type of veg to find", () => {
    const total = countVeg([{ name: "Parsnip", type: "root", quantity: 4 }]);
    const expected = 0;
    expect(total).to.eql(expected);
  });
  it("returns the quantity value of veg when the type of veg does match the type passed as a second argument", () => {
    const total = countVeg(
      [{ name: "Parsnip", type: "root", quantity: 4 }],
      "root"
    );
    const expected = 4;
    expect(total).to.eql(expected);
  });
  it("returns the quantity value of the matching type of veg when passed different types of veg", () => {
    const total = countVeg(
      [
        { name: "Parsnip", type: "root", quantity: 4 },
        { name: "Broccoli", type: "brassica", quantity: 1 }
      ],
      "root"
    );
    const expected = 4;
    expect(total).to.eql(expected);
  });
});
