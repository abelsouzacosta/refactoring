// @ts-nocheck

function isSunday(date) {
	return date.getDay() === 0 ? true : false;
}

function isOvernight(date) {
	const START_OVERNIGHT = 22;
	const END_OVERNIGHT = 6;

	return date.getHours() >= START_OVERNIGHT || date.getHours() <= END_OVERNIGHT ? true : false
}


function isValidDistance(distance) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0 ? true : false;
}

function isValidDate(date) {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date" ? true : false;
}

// calculate ride
export function calculateRide (segments) {
	let fare = 0;
	const OVERNIGHT_FARE = 3.90;
	const OVERNIGHT_SUNDAY_FARE = 5;
	const SUNDAY_FARE = 2.9;
	const DAILY_FARE = 2.10;
	const MINUMUM_FARE = 10;
	
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) throw new Error(`Invalid Distance`)
			if (!isValidDate(segment.date))  throw new Error(`Invalid Date`)
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
	}
	if (fare < MINUMUM_FARE) {
		return MINUMUM_FARE;
	} else {
		return fare;
	}
}

