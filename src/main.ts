// @ts-nocheck
// calculate ride
export function calculateRide (segments) {
	let result = 0;
	for (const segment of segments) {
		if (segment.dist != null && segment.dist != undefined && typeof segment.dist === "number" && segment.dist > 0) {
			if (segment.ds != null && segment.ds != undefined && segment.ds instanceof Date && segment.ds.toString() !== "Invalid Date") {
	
				// overnight
			
				if (segment.ds.getHours() >= 22 || segment.ds.getHours() <= 6) {
			
					// not sunday
					if (segment.ds.getDay() !== 0) {
						
						result += segment.dist * 3.90;
					// sunday
					} else {
						result += segment.dist * 5;
	
					}
				} else {
					// sunday
					if (segment.ds.getDay() === 0) {
			
						result += segment.dist * 2.9;
			
					} else {
						result += segment.dist * 2.10;
					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(dist);
	
			return -1;
		}
		
	}
	if (result < 10) {
		return 10;
	} else {
		return result;
	}
}

