export class Segment {

  START_OVERNIGHT = 22;
  END_OVERNIGHT = 6;

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
    return this.date.getHours() >= this.START_OVERNIGHT ||
      this.date.getHours() <= this.END_OVERNIGHT
      ? true
      : false;
  }

  public isFirstDayOfMonth() {
    return this.date.getDate() === 1 ? true : false;
  }
}
