import FareCalculatorHandler from "../interfaces/FareCalculatorHandler";
import { Segment } from "../Segment";

export class FirstDayOfMonthFareCalculatorHandler implements FareCalculatorHandler {
  FARE = 1.5;
  next?: FareCalculatorHandler | undefined;

  constructor(next?: FareCalculatorHandler) {
    Object.assign(this, { next });
  }

  handle(segment: Segment): number {
    if (segment.isFirstDayOfMonth()) {
      return segment.distance * this.FARE;
    }

    if (!this.next) throw new Error();

    return this.next.handle(segment);
  }
}