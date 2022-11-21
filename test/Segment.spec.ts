import { Segment } from '../src/Segment';

describe('Segment', () => {
  let segment: Segment;
  describe('Methods', () => {
    beforeEach(() => {
      segment =  new Segment(10, new Date("2022-11-21T15:00:00"));
    });

    it('Should return true if is overnight', () => {
      expect(segment.isOvernight(new Date("2022-11-21T23:00:00"))).toBe(true);
    });

    it('Should return false if is not overnight', () => {
      expect(segment.isOvernight(new Date("2022-11-21T15:00:00"))).toBe(false)
    });

    it('Should return true if is sunday', () => {
      expect(segment.isSunday(new Date("2022-12-25T23:00:00"))).toBe(true)
    });

    it('Should return false if is not sunday', () => {
      expect(segment.isSunday(new Date("2022-11-25T23:00:00"))).toBe(false)
    });

    it('Should return true if is first day of the month', () => {
      expect(segment.isFirstDayOfMonth(new Date("2022-12-01T23:00:00"))).toBe(true);
    });

    it('Should return false if is not first day of month', () => {
      expect(segment.isFirstDayOfMonth(new Date("2022-12-25T23:00:00"))).toBe(false);
    })
  })

  describe('constructor', () => {
    it('Should throw an error if the distance given is invalid', () => {
      expect(() => segment = new Segment(-10, new Date("2022-12-25T23:00:00"))).toThrow(new Error(`Invalid Distance`));
    });

    it('Should throw an error if the date given is invalid', () => {
      expect(() => segment = new Segment(10, new Date("invalid"))).toThrow(new Error(`Invalid Date`));
    })
  })
});