import FareCalculatorStrategy from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class NormalFareCalculator implements FareCalculatorStrategy {
  FARE = 2.1;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}
