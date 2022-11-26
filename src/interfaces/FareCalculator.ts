import { Segment } from "../Segment";

export default interface FareCalculatorStrategy {
  calculate(segment: Segment): number;
}
