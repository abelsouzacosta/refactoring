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
      if (!this.isValidDistance(segment.distance))
        throw new Error(`Invalid Distance`);
      if (!this.isValidDate(segment.date)) throw new Error(`Invalid Date`);

      if (this.isFirstDayOfMonth(segment.date)) {
        this.fare += segment.distance * this.FIRST_DAY_FARE;
        continue;
      }

      if (this.isOvernight(segment.date) && this.isSunday(segment.date)) {
        this.fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        continue;
      }

      if (this.isOvernight(segment.date) && !this.isSunday(segment.date)) {
        this.fare += segment.distance * this.OVERNIGHT_FARE;
        continue;
      }

      if (!this.isOvernight(segment.date) && !this.isSunday(segment.date)) {
        this.fare += segment.distance * this.DAILY_FARE;
        continue;
      }

      if (!this.isOvernight(segment.date) && this.isSunday(segment.date)) {
        this.fare += segment.distance * this.SUNDAY_FARE;
        continue;
      }
    }

    return this.fare <= this.MINUMUM_FARE ? this.MINUMUM_FARE : this.fare;
  }

  isSunday(date: Date) {
    return date.getDay() === 0 ? true : false;
  }
  
  isOvernight(date: Date) {
    const START_OVERNIGHT = 22;
    const END_OVERNIGHT = 6;
  
    return date.getHours() >= START_OVERNIGHT || date.getHours() <= END_OVERNIGHT ? true : false
  }
  
  isValidDistance(distance: number) {
    return distance != null && distance != undefined && typeof distance === "number" && distance > 0 ? true : false;
  }
  
  isValidDate(date: Date) {
    return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date" ? true : false;
  }
  
  isFirstDayOfMonth(date: Date) {
    return date.getDate() === 1 ? true : false;
  }
}
