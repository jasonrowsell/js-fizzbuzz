describe("fizzBuzz", () => {
  let fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", () => {
    it("returns fizz for 3", () => {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });
    it("returns fizz for 6", () => {
      expect(fizzBuzz.play(6)).toEqual("fizz");
    });
  });

  describe("multiples of 5", () => {
    it("returns fizz for 5", () => {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });
    it("returns fizz for 10", () => {
      expect(fizzBuzz.play(10)).toEqual("buzz");
    });
  });

  describe("multiples of 15", () => {
    it("returns fizz for 15", () => {
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
    });
    it("returns fizz for 30", () => {
      expect(fizzBuzz.play(30)).toEqual("fizzbuzz");
    });
  });

  describe("not a multiple of 3 or 5", () => {
    it("returns the integer", () => {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
    it("returns fizz for 30", () => {
      expect(fizzBuzz.play(19)).toEqual(19);
    });
  });
});
