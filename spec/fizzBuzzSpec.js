describe("fizzBuzz", function () {
  let fizzBuzz;
  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function () {
    it("returns fizz for 3", function () {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });
    it("returns fizz for 6", function () {
      expect(fizzBuzz.play(6)).toEqual("fizz");
    });
  });

  describe("multiples of 5", function () {
    it("returns fizz for 5", function () {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });
    it("returns fizz for 10", function () {
      expect(fizzBuzz.play(10)).toEqual("buzz");
    });
  });

  describe("multiples of 15", function () {
    it("returns fizz for 15", function () {
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
    });
    it("returns fizz for 30", function () {
      expect(fizzBuzz.play(30)).toEqual("fizzbuzz");
    });
  });

  describe("not a multiple of 3 or 5", function () {
    it("returns the integer", function () {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
    it("returns fizz for 30", function () {
      expect(fizzBuzz.play(19)).toEqual(19);
    });
  });
});
