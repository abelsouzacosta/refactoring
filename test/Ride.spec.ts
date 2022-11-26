import { FirstDayOfMonthFareCalculatorHandler } from "../src/handlers/FirstDayOfMonthFareCalculatorHandler";
import { LongDistanceFareCalculatorHandler } from "../src/handlers/LongDistanceFareCalculatorHandler";
import { NormalFareCalculatorHandler } from "../src/handlers/NormalFareCalculatorHandler";
import { OvernightFareCalculatorHandler } from "../src/handlers/OvernightFareCalculatorHandler";
import { OvernightrSundayFareCalculatorHandler } from "../src/handlers/OvernightSundayFareCalculatorHandler";
import { SundayFareCalculatorHandler } from "../src/handlers/SundayFareCalculatorHandler";
import Ride from "../src/Ride";

describe("Ride", () => {
  let ride: Ride;

  beforeEach(() => {
    let sundayFareCalculatorHandler = new SundayFareCalculatorHandler()
    let overnightSundayFareCalculatorHandler = new OvernightrSundayFareCalculatorHandler(sundayFareCalculatorHandler);
    let overnightFareCalculatorHandler = new OvernightFareCalculatorHandler(overnightSundayFareCalculatorHandler);
    let normalFareCalculatorHandler = new NormalFareCalculatorHandler(overnightFareCalculatorHandler)
    let longDistanceFareCalculatorHanler = new LongDistanceFareCalculatorHandler(normalFareCalculatorHandler);
    let firstDayOfMonthFareCalculatorHandler = new FirstDayOfMonthFareCalculatorHandler(longDistanceFareCalculatorHanler);
    ride = new Ride(firstDayOfMonthFareCalculatorHandler);
  });

  it("Ride should be implemented", () => {
    expect(ride).toBeDefined();
  });

  it("Should calculate a ride for the first day in the month", () => {
    ride.addSegments(10, new Date("2022-12-01T10:00:00"));

    expect(ride.calculateFare()).toBe(15);
  });

  it("Should calculate a ride for sunday", () => {
    ride.addSegments(10, new Date("2022-12-04T10:00:00"));

    expect(ride.calculateFare()).toBe(29);
  });

  it("Should calculate a ride for sunday overnight", () => {
    ride.addSegments(10, new Date("2022-12-04T23:00:00"));

    expect(ride.calculateFare()).toBe(50);
  });

  it("Should calculate a ride for day in the week overnight", () => {
    ride.addSegments(10, new Date("2022-11-21T23:00:00"));

    expect(ride.calculateFare()).toBe(39);
  });

  it("Should calculate a ride for a day in the week not overnight", () => {
    ride.addSegments(10, new Date("2022-11-21T15:00:00"));

    expect(ride.calculateFare()).toBe(21);
  });

  it("Should calculate a ride for the minimum fare", () => {
    ride.addSegments(3, new Date("2022-11-21T15:00:00"));

    expect(ride.calculateFare()).toBe(ride.MINUMUM_FARE);
  });

  it('Should calculate a fare for a long distance', () => {
    ride.addSegments(120, new Date("2022-11-21T15:00:00"));

    expect(ride.calculateFare()).toBe(720)
  })
});
