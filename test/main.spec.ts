import { calculateRide } from "../src/main";

describe('Calculate Ride', () => {
  it('Should calculate a ride for a day in the week not overnight', () => {
    expect(calculateRide([
      { dist: 10, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(21)
  })

  it('Should calculate a ride for a day in the week overnight', () => {
    expect(calculateRide([
      { dist: 10, ds: new Date("2022-11-21T23:00:00") }
    ])).toBe(39)
  })

  it('Should calculate a ride for sunday not overnight', () => {
    expect(calculateRide([
      { dist: 10, ds: new Date("2022-11-20T10:00:00") }
    ])).toBe(29)
  })

  it('should calculate a ride for sunday overnight', () => {
    expect(calculateRide([
      { dist: 10, ds: new Date("2022-11-20T23:00:00") }
    ])).toBe(50)
  })

  it('Should not calculate a ride if the distance is invalid', () => {
    expect(calculateRide([
      { dist: -10, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(-1)
  })

  it('Should not calculate a ride if the date is invalid', () => {
    expect(calculateRide([
      { dist: 10, ds: new Date("abcdef") }
    ])).toBe(-2)
  })

  it('Should calculate a ride for the first day of the month', () => {
    expect(calculateRide([
      { dist: 3, ds: new Date("2021-03-01T10:00:00") }
    ])).toBe(10)
  })
});