const converter = require("../src/converter");

describe("convert a number in pounds with pences into notes and coins", () => {
  it("exist fx", () => {
    expect(converter).toEqual(expect.any(Function));
  });
  it("return an array", () => {
    expect(converter(1.1)).toEqual(expect.arrayContaining([]));
  });
  it("return a note", () => {
    expect(converter(5)).toEqual(["£5"]);
  });
  it("return a note and a coin with an integer input", () => {
    expect(converter(6)).toEqual(["£5", "£1"]);
  });
  it("return notes and coins for integer input", () => {
    expect(converter(1.75)).toEqual(["£1", "50p", "20p", "5p"]);
  });
  it("returns pence", () => {
    expect(converter(0.16)).toEqual(["10p", "5p", "1p"]);
  });
  it("return notes and coins for integer input", () => {
    expect(converter(0.16)).toEqual(["10p", "5p", "1p"]);
  });
  it("return notes and coins for integer input", () => {
    expect(converter(100)).toEqual(["£50", "£50"]);
  });
  it("return notes and coins for integer input", () => {
    expect(converter("string")).toEqual("must be an integer or float input");
  });
});
