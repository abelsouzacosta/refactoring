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

function isFirstDayOfMonth(date) {
	return date.getDate() === 1 ? true : false;
}

// calculate ride
export function calculateRide (segments) {
	let fare = 0;
	const OVERNIGHT_FARE = 3.90;
	const OVERNIGHT_SUNDAY_FARE = 5;
	const SUNDAY_FARE = 2.9;
	const DAILY_FARE = 2.10;
	const FIRST_DAY_FARE = 1.5;
	const MINUMUM_FARE = 10;
	
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) throw new Error(`Invalid Distance`)
		if (!isValidDate(segment.date))  throw new Error(`Invalid Date`)

		if (isFirstDayOfMonth(segment.date)) {
			fare += segment.distance * FIRST_DAY_FARE
			continue;
		} 

		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
			continue;
		}

		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_FARE;
			continue;
		}

		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * DAILY_FARE;
			continue;
		}

		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_FARE;
			continue;
		}
	}
	
	return fare <= MINUMUM_FARE ? MINUMUM_FARE : fare;
}

