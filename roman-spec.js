var roman = require("./roman");

describe("roman", function() {
  it("should return I when convert 1", function() {
	expect(roman.convert(1)).toBe("I");
  });
});
