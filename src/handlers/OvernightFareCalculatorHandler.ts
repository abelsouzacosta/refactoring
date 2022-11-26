import FareCalculatorHandler from "../interfaces/FareCalculatorHandler";
import { Segment } from "../Segment";

export class OvernightFareCalculatorHandler implements FareCalculatorHandler {
  FARE = 3.9;

  next?: FareCalculatorHandler | undefined;

  constructor(next?: FareCalculatorHandler) {
    Object.assign(this, { next });
  }

  handle(segment: Segment): number {
    if (segment.isOvernight() && !segment.isSunday()) {
      return segment.distance * this.FARE;
    }

    if (!this.next) throw new Error();

    return this.next.handle(segment);
  }
}