import { Segment } from "../Segment";
import { FirstDayOfMonthFareCalculator } from "./FirstDayOfMonthFareCalculator";
import { NormalFareCalculator } from "./NormalFareCalculator";
import { OvernightFareCalculator } from "./OvernightFareCalculator";
import { OvernightSundayFareCalculator } from "./OvernightSundayFareCalculator";
import { SundayFareCalculator } from "./SundayFareCalculator";

export class FareCalculatorFactory {
  static create(segment: Segment) {
    if (segment.isFirstDayOfMonth()) {
      return new FirstDayOfMonthFareCalculator();
    }

    if (segment.isOvernight() && segment.isSunday()) {
      return new OvernightSundayFareCalculator();
    }

    if (segment.isOvernight() && !segment.isSunday()) {
      return new OvernightFareCalculator();
    }

    if (!segment.isOvernight() && !segment.isSunday()) {
      return new NormalFareCalculator();
    }

    if (!segment.isOvernight() && segment.isSunday()) {
      return new SundayFareCalculator();
    }

    throw new Error();
  }
}