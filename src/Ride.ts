import { Segment } from "./Segment";

export default class Ride {
  segments: Segment[];
  fare: number;
  OVERNIGHT_FARE = 3.90;
	OVERNIGHT_SUNDAY_FARE = 5;
	SUNDAY_FARE = 2.9;
	DAILY_FARE = 2.10;
	FIRST_DAY_FARE = 1.5;
	MINUMUM_FARE = 10;


  constructor() {
    this.segments = [];
    this.fare = 0;
  }

  addSegments(segment: Segment) {
    this.segments.push(segment);
  }

  calculateFare() {
    for (const segment of this.segments) {
      if (segment.isFirstDayOfMonth(segment.date)) {
        this.fare += segment.distance * this.FIRST_DAY_FARE;
        continue;
      }

      if (segment.isOvernight(segment.date) && segment.isSunday(segment.date)) {
        this.fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        continue;
      }

      if (segment.isOvernight(segment.date) && !segment.isSunday(segment.date)) {
        this.fare += segment.distance * this.OVERNIGHT_FARE;
        continue;
      }

      if (!segment.isOvernight(segment.date) && !segment.isSunday(segment.date)) {
        this.fare += segment.distance * this.DAILY_FARE;
        continue;
      }

      if (!segment.isOvernight(segment.date) && segment.isSunday(segment.date)) {
        this.fare += segment.distance * this.SUNDAY_FARE;
        continue;
      }
    }

    return this.fare <= this.MINUMUM_FARE ? this.MINUMUM_FARE : this.fare;
  }
}
