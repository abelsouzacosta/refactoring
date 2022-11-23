import Ride from "../src/Ride";
import { Segment } from "../src/Segment";

describe("Ride", () => {
  let ride: Ride;

  beforeEach(() => {
    ride = new Ride();
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
});
