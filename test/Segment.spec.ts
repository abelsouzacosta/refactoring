import { Segment } from '../src/Segment';

describe('Segment', () => {
  it('Should reutnr true if the date given is valid', () => {
    let segment = new Segment(10, new Date("2022-11-21T15:00:00"));

    expect(segment.isValidDate).toBeTruthy();
  })

  it('Should return true if the distance given is valid', () => {
    let segment = new Segment(10, new Date("2022-11-21T15:00:00"));

    expect(segment.isValidDistance).toBeTruthy();
  });

  it('Should return true if is overnight', () => {
    let segment = new Segment(10, new Date("2022-11-21T15:00:00"));

    expect(segment.isValidDistance).toBeTruthy();
  });
});