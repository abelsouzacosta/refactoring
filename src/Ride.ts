import { Segment } from "./Segment";

export default class Ride {
  segments: Segment[];
  fare: number;
  OVERNIGHT_FARE = 3.9;
  OVERNIGHT_SUNDAY_FARE = 5;
  SUNDAY_FARE = 2.9;
  DAILY_FARE = 2.1;
  FIRST_DAY_FARE = 1.5;
  MINUMUM_FARE = 10;

  constructor() {
    this.segments = [];
    this.fare = 0;
  }

  addSegments(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  calculateFare() {
    for (const segment of this.segments) {
      if (segment.isFirstDayOfMonth()) {
        this.fare += segment.distance * this.FIRST_DAY_FARE;
        continue;
      }

      if (segment.isOvernight() && segment.isSunday()) {
        this.fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        continue;
      }

      if (segment.isOvernight() && !segment.isSunday()) {
        this.fare += segment.distance * this.OVERNIGHT_FARE;
        continue;
      }

      if (!segment.isOvernight() && !segment.isSunday()) {
        this.fare += segment.distance * this.DAILY_FARE;
        continue;
      }

      if (!segment.isOvernight() && segment.isSunday()) {
        this.fare += segment.distance * this.SUNDAY_FARE;
        continue;
      }
    }

    return this.fare <= this.MINUMUM_FARE ? this.MINUMUM_FARE : this.fare;
  }
}
