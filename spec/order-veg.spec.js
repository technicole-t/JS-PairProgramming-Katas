const orderVeg = require("../katas/order-veg");
const { expect } = require("chai");

describe.only("orderVeg", () => {
  it("if empty array is passed return an empty array", () => {
    expect(orderVeg([])).to.deep.equal([]);
  });
  it("if array contains one veggie return the array", () => {
    const input = orderVeg([{ name: "Parsnip", type: "root", quantity: 4 }]);
    const returnVal = [{ name: "Parsnip", type: "root", quantity: 4 }];
    expect(input).to.deep.equal(returnVal);
  });
  it("if passed multiple veggie objects return sorted in order of quantity", () => {
    const input = orderVeg([
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ]);
    const returnVal = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    expect(input).to.deep.equal(returnVal);
  });
});
