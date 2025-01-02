/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true

*/

function meetingRooms(intervals) {
	//  0    5     10    15    20     25    30
	//1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	//2      xxxxxxx
	//3                 xxxxxxxx
	const START = 0, END = 1;
	intervals.sort((x, y) => x[0] - y[0]); // O(nlogn)

	// [[0, 30], [5, 10], [15, 20]]
	// As we can see, we can sort the intervals to when they start and check a overlap
	// overlap: if intevals[i][START] < intervals[i-1][END]
	let prevMeeting = intervals[0]
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][START] < intervals[i - 1][END]) {
			return false
		}
		prevMeeting = intervals[i]
	}
	return true
}

console.log(meetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(meetingRooms([[7, 10], [2, 4]]))

