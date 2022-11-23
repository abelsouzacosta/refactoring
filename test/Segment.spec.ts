import { Segment } from "../src/Segment";

describe("Segment", () => {
  describe("constructor", () => {
    it("Should create a valid instance if a valid distance and a valid date is given", () => {
      let distance = 10;
      let date = new Date("2022-12-25T10:00:00");
      let segment = new Segment(distance, date);

      expect(segment.date).toBe(date);
      expect(segment.distance).toBe(distance);
    });

    it("Should thorw an exception with invalid date given", () => {
      expect(() => new Segment(10, new Date("invalid"))).toThrow(
        new Error(`Invalid Date`)
      );
    });

    it("Should thorw an exception with invalid distance given", () => {
      expect(() => new Segment(-10, new Date("2022-12-25T10:00:00"))).toThrow(
        new Error(`Invalid Distance`)
      );
    });
  });

  describe("Validation Methods", () => {
    it("Should return true with date in the first day of month", () => {
      let segment = new Segment(10, new Date("2023-01-01T10:00:00"));

      expect(segment.isFirstDayOfMonth()).toBe(true);
    });

    it("Should return false with date not in the first day of the month", () => {
      let segment = new Segment(10, new Date("2023-01-02T10:00:00"));

      expect(segment.isFirstDayOfMonth()).toBe(false);
    });
  });
});
