import FareCalculatorStrategy from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class SundayFareCalculator implements FareCalculatorStrategy {
  FARE = 2.9;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}
