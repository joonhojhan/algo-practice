const canVisitAllRooms = rooms => {
	// initialize visited set object to keep track of visited rooms
	const visited = new Set();
	// initialize queue to keep track of which rooms to visit next
	const queue = [rooms[0]];
	// while queue for rooms to visit is not empty
	while (queue.length) {
		// remove first element in queue and set temp variable for which room we are currently visiting
		const temp = queue.shift();
		// if temp has not been visited
		if (!visited.has(temp)) {
			// add temp to visited set
			visited.add(temp);
			// add all of the keys to the rooms in current room to queue
			for (let i = 0; i < temp.length; i++) {
				queue.push(rooms[temp[i]]);
			}
		}
	}
	// returns true if the size of the set is equal to the total number of rooms
	return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]) === true);
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]) === false);
