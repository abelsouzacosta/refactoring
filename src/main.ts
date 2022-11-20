// @ts-nocheck

function isSunday(date) {
	return date.getDay() === 0 ? true : false;
}

function isOvernight(date) {
	const START_OVERNIGHT = 22;
	const END_OVERNIGHT = 6;

	return date.getHours() >= START_OVERNIGHT || date.getHours() <= END_OVERNIGHT ? true : false
}

// calculate ride
export function calculateRide (segments) {
	let fare = 0;
	const OVERNIGHT_FARE = 3.90;
	const OVERNIGHT_SUNDAY_FARE = 5;
	const SUNDAY_FARE = 2.9;
	const DAILY_FARE = 2.10;
	
	
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
				if (isOvernight(segment.date)) {
					if (isSunday(segment.date)) {
						fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
					} else {
						fare += segment.distance * OVERNIGHT_FARE;
					}
				} else {
					if (isSunday(segment.date)) {
						fare += segment.distance * SUNDAY_FARE;
					} else {
						fare += segment.distance * DAILY_FARE;
					}
				}
			} else {
				return -2;
			}
		} else {
			return -1;
		}
		
	}
	if (fare < 10) {
		return 10;
	} else {
		return fare;
	}
}

