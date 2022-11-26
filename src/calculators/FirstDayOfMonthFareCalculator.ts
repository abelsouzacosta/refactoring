import FareCalculatorStrategy from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class FirstDayOfMonthFareCalculator implements FareCalculatorStrategy {
  FARE = 1.5;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}
