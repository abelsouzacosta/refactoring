import FareCalculatorStrategy from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class OvernightSundayFareCalculator implements FareCalculatorStrategy {
  FARE = 5;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}
