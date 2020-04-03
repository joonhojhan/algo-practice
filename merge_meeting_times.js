/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/
const mergeRanges = function(meetings) {
	meetings.sort((a, b) => a.startTime - b.startTime);
	let res = [];
	let currIdx = 0;
	while (currIdx < meetings.length) {
		let curr = meetings[currIdx];
		let tempNext = meetings[currIdx + 1];
		let tempEnd = curr.endTime;
		if (
			currIdx !== meetings.length - 1 &&
			(curr.startTime === tempNext.startTime || curr.endTime >= tempNext.startTime)
		) {
			for (let nextIdx = currIdx + 1; nextIdx < meetings.length; nextIdx++) {
				let next = meetings[nextIdx];
				if (next.startTime <= curr.endTime) {
					tempEnd = Math.max(tempEnd, next.endTime);
					if (nextIdx === meetings.length - 1) {
						currIdx = meetings.length;
					}
				} else {
					currIdx = nextIdx;
					break;
				}
			}
			let newTime = { startTime: curr.startTime, endTime: tempEnd };
			if (
				currIdx >= meetings.length ||
				newTime.endTime < meetings[currIdx].startTime
			) {
				res.push(newTime);
			} else {
				meetings[currIdx - 1] = newTime;
				currIdx -= 1;
			}
		} else {
			res.push(curr);
			currIdx++;
		}
	}
	return res;
};

const test1 = [
	{ startTime: 0, endTime: 2 },
	{ startTime: 3, endTime: 5 },
	{ startTime: 4, endTime: 8 },
	{ startTime: 10, endTime: 12 },
	{ startTime: 9, endTime: 10 },
	{ startTime: 0, endTime: 1 },
	{ startTime: 5, endTime: 7 },
];

const test2 = [
	{ startTime: 1, endTime: 2 },
	{ startTime: 2, endTime: 3 },
];

const test3 = [
	{ startTime: 1, endTime: 5 },
	{ startTime: 2, endTime: 3 },
];

const test4 = [
	{ startTime: 1, endTime: 10 },
	{ startTime: 2, endTime: 6 },
	{ startTime: 3, endTime: 5 },
	{ startTime: 7, endTime: 9 },
];

const test5 = [
	{ startTime: 1, endTime: 4 },
	{ startTime: 2, endTime: 5 },
	{ startTime: 5, endTime: 8 },
];

console.log('Answer:\n', mergeRanges(test1));
console.log('Should return:\n', [
	{ startTime: 0, endTime: 2 },
	{ startTime: 3, endTime: 8 },
	{ startTime: 9, endTime: 12 },
]);
console.log('Answer:\n', mergeRanges(test2));
console.log('Should return:\n', [{ startTime: 1, endTime: 3 }]);
console.log('Answer:\n', mergeRanges(test3));
console.log('Should return:\n', [{ startTime: 1, endTime: 5 }]);
console.log('Answer:\n', mergeRanges(test4));
console.log('Should return:\n', [{ startTime: 1, endTime: 10 }]);
console.log('Answer:\n', mergeRanges(test5));
console.log('Should return:\n', [{ startTime: 1, endTime: 8 }]);
