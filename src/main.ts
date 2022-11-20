// @ts-nocheck
// calculate ride
export function calculateRide (segments) {
	let fare = 0;
	const OVERNIGHT_FARE = 3.90;
	const OVERNIGHT_SUNDAY_FARE = 5;
	const SUNDAY_FARE = 2.9;
	const DAILY_FARE = 2.10;
	const START_OVERNIGHT = 22;
	const END_OVERNIGHT = 6;
	
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
	
				// overnight
			
				if (segment.date.getHours() >= START_OVERNIGHT || segment.date.getHours() <= END_OVERNIGHT) {
			
					// not sunday
					if (segment.date.getDay() !== 0) {
						
						fare += segment.distance * OVERNIGHT_FARE;
					// sunday
					} else {
						fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
	
					}
				} else {
					// sunday
					if (segment.date.getDay() === 0) {
			
						fare += segment.distance * SUNDAY_FARE;
			
					} else {
						fare += segment.distance * DAILY_FARE;
					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(distance);
	
			return -1;
		}
		
	}
	if (fare < 10) {
		return 10;
	} else {
		return fare;
	}
}

