import { FirstDayOfMonthFareCalculator } from "./calculators/FirstDayOfMonthFareCalculator";
import { NormalFareCalculator } from "./calculators/NormalFareCalculator";
import { OvernightFareCalculator } from "./calculators/OvernightFareCalculator";
import { OvernightSundayFareCalculator } from "./calculators/OvernightSundayFareCalculator";
import { SundayFareCalculator } from "./calculators/SundayFareCalculator";
import { Segment } from "./Segment";

export default class Ride {
  segments: Segment[];
  fare: number;
  OVERNIGHT_SUNDAY_FARE = 5;
  SUNDAY_FARE = 2.9;
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
        let fareCalculator = new FirstDayOfMonthFareCalculator();
        this.fare += fareCalculator.calculate(segment);
        continue;
      }

      if (segment.isOvernight() && segment.isSunday()) {
        let fareCalculator = new OvernightSundayFareCalculator();
        this.fare += fareCalculator.calculate(segment);
        continue;
      }

      if (segment.isOvernight() && !segment.isSunday()) {
        let fareCalculator = new OvernightFareCalculator();
        this.fare += fareCalculator.calculate(segment);
        continue;
      }

      if (!segment.isOvernight() && !segment.isSunday()) {
        let fareCalculator = new NormalFareCalculator();
        this.fare += fareCalculator.calculate(segment);
        continue;
      }

      if (!segment.isOvernight() && segment.isSunday()) {
        let fareCalculator = new SundayFareCalculator();
        this.fare += fareCalculator.calculate(segment);
        continue;
      }
    }

    return this.fare <= this.MINUMUM_FARE ? this.MINUMUM_FARE : this.fare;
  }
}
