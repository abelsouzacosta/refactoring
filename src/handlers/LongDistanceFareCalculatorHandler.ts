import FareCalculatorHandler from "../interfaces/FareCalculatorHandler";
import { Segment } from "../Segment";

export class LongDistanceFareCalculatorHandler implements FareCalculatorHandler {
  FARE = 6;
  next?: FareCalculatorHandler | undefined;

  constructor(next?: FareCalculatorHandler) {
    Object.assign(this, { next });
  }

  handle(segment: Segment): number {
    if (segment.isLongDistance()) {
      return segment.distance * this.FARE;
    }

    if (!this.next) throw new Error();

    return this.next.handle(segment);
  }
}