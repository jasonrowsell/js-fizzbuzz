describe("fizzBuzz", function () {
  var fizzBuzz;

  describe("multiples of 3", function () {
    it("returns fizz for 3", function () {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.play(3)).toBe(true);
    });
  });
});
