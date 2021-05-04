describe("fizzBuzz", function () {
  let fizzBuzz;
  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function () {
    it("returns fizz for 3", function () {
      expect(fizzBuzz.play(3)).toBe(true);
    });
    it("returns fizz for 6", function () {
      expect(fizzBuzz.play(6)).toBe(true);
    });
  });
});
