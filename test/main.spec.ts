import { calculateRide } from "../src/main";

describe('Calculate Ride', () => {
  it('should calculate a ride for a day in the week not overnight', () => {
    expect(calculateRide([
      { distance: 10, date: new Date("2021-03-01T10:00:00") }
    ])).toBe(21)
  })

  it('should calculate a ride for a day in the week overnight', () => {
    expect(calculateRide([
      { distance: 10, date: new Date("2022-11-21T23:00:00") }
    ])).toBe(39)
  })

  it('should calculate a ride for sunday not overnight', () => {
    expect(calculateRide([
      { distance: 10, date: new Date("2022-11-20T10:00:00") }
    ])).toBe(29)
  })

  it('should calculate a ride for sunday overnight', () => {
    expect(calculateRide([
      { distance: 10, date: new Date("2022-11-20T23:00:00") }
    ])).toBe(50)
  })

  it('should not calculate a ride if the distance is invalid', () => {
    const segments = [
      { distance: -10, date: new Date("2021-03-01T10:00:00") }
    ]

    expect(() => calculateRide(segments)).toThrow(new Error('Invalid Distance'))
  })

  it('should not calculate a ride if the date is invalid', () => {
    const segments = [
      { distance: 10, date: new Date("abcdef") }
    ]

    expect(() => calculateRide(segments)).toThrow(new Error('Invalid Date'))
  })

  it('should calculate a ride for the first day of the month', () => {
    expect(calculateRide([
      { distance: 3, date: new Date("2021-03-01T10:00:00") }
    ])).toBe(10)
  })
});