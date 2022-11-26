import FareCalculatorStrategy from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class LongDistanceFareCalculator implements FareCalculatorStrategy {
  FARE = 6;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}