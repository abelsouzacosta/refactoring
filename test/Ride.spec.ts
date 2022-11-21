import Ride from '../src/Ride'

describe('Ride', () => {
  let ride: Ride;

  beforeEach(() => {
    ride = new Ride();
  });

  it('Ride should be implemented', () => {
    expect(ride).toBeDefined();
  })

  it('Should calculate a ride for the first day in the month', () => {
    const segment = {distance: 10, date: new Date("2022-12-01T10:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(15);
  });

  it('Should calculate a ride for sunday', () => {
    const segment = {distance: 10, date: new Date("2022-12-04T10:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(29);
  });

  it('Should calculate a ride for sunday overnight', () => {
    const segment = {distance: 10, date: new Date("2022-12-04T23:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(50);
  })

  it('Should calculate a ride for day in the week overnight', () => {
    const segment = {distance: 10, date: new Date("2022-11-21T23:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(39);
  })

  it('Should calculate a ride for a day in the week not overnight', () => {
    const segment = {distance: 10, date: new Date("2022-11-21T15:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(21);
  })

  it('Should calculate a ride for the minimum fare', () => {
    const segment = {distance: 3, date: new Date("2022-11-21T15:00:00")};

    ride.addSegments(segment);

    expect(ride.calculateFare()).toBe(ride.MINUMUM_FARE);
  })

  it('Should not calculate a ride if the distance given is invalid', () => {
    const segment = {distance: -10, date: new Date("2022-11-21T15:00:00")};

    ride.addSegments(segment);

    expect(() => ride.calculateFare()).toThrow(new Error(`Invalid Distance`))
  })
    
  it('Should not calculate a ride if the distance given is invalid', () => {
    const segment = {distance: 10, date: new Date("invalid")};

    ride.addSegments(segment);

    expect(() => ride.calculateFare()).toThrow(new Error(`Invalid Date`))
  })
})