export class Segment {
  constructor(readonly distance: number, readonly date: Date) {
    if(!this.isValidDistance(distance)) throw new Error(`Invalid Distance`);
    if(!this.isValidDate(date)) throw new Error(`Invalid Date`);
  }

  public isValidDistance(distance: number) {
    return distance != null && distance != undefined && typeof distance === "number" && distance > 0 ? true : false;
  }
  
  public isValidDate(date: Date) {
    return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date" ? true : false;
  }

  public isSunday(date: Date) {
    return date.getDay() === 0 ? true : false;
  }
  
  public isOvernight(date: Date) {
    const START_OVERNIGHT = 22;
    const END_OVERNIGHT = 6;
  
    return date.getHours() >= START_OVERNIGHT || date.getHours() <= END_OVERNIGHT ? true : false
  }
  
  public isFirstDayOfMonth(date: Date) {
    return date.getDate() === 1 ? true : false;
  }
}