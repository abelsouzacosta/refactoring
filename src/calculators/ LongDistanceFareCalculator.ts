import FareCalculator from "../interfaces/FareCalculator";
import { Segment } from "../Segment";

export class LongDistanceFareCalculator implements FareCalculator {
  FARE = 6;

  calculate(segment: Segment): number {
    return segment.distance * this.FARE;
  }
}