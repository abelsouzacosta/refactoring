import FareCalculatorHandler from "./interfaces/FareCalculatorHandler";
import { Segment } from "./Segment";

export default class Ride {
  segments: Segment[];
  fare = 0;
  MINUMUM_FARE = 10;

  constructor(readonly fareCalculatorHandlers: FareCalculatorHandler) {
    this.segments = [];
  }

  addSegments(distance: number, date: Date): void {
    this.segments.push(new Segment(distance, date));
  }

  calculateFare(): number {
    for (const segment of this.segments) {
      this.fare += this.fareCalculatorHandlers.handle(segment);
    }

    return this.fare <= this.MINUMUM_FARE ? this.MINUMUM_FARE : this.fare;
  }
}
