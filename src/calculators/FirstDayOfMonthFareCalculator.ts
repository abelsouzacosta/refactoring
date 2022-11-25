import FareCalculator from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class FirstDayOfMonthFareCalculator implements FareCalculator {
  FARE = 1.5;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}
