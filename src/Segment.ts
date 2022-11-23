export class Segment {
  constructor(readonly distance: number, readonly date: Date) {
    if (!this.isValidDistance()) throw new Error(`Invalid Distance`);
    if (!this.isValidDate()) throw new Error(`Invalid Date`);
  }

  public isValidDistance() {
    return this.distance != null &&
      this.distance != undefined &&
      typeof this.distance === "number" &&
      this.distance > 0
      ? true
      : false;
  }

  public isValidDate() {
    return this.date != null &&
      this.date != undefined &&
      this.date instanceof Date &&
      this.date.toString() !== "Invalid Date"
      ? true
      : false;
  }

  public isSunday() {
    return this.date.getDay() === 0 ? true : false;
  }

  public isOvernight() {
    const START_OVERNIGHT = 22;
    const END_OVERNIGHT = 6;

    return this.date.getHours() >= START_OVERNIGHT ||
      this.date.getHours() <= END_OVERNIGHT
      ? true
      : false;
  }

  public isFirstDayOfMonth() {
    return this.date.getDate() === 1 ? true : false;
  }
}
