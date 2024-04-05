class ZigzagIterator {
	queue: Array<number[]> = [];
	cursor: number = 0;
	constructor(v1: number[], v2: number[]) {
		if (v1.length > 0) this.queue.push(v1);
		if (v2.length > 0) this.queue.push(v2);
	}

	next(): number {
		let currentVal = this.queue[this.cursor].shift();

		// Adds the reading vector to the queue again if it has more members
		if (this.queue[this.cursor].length > 0) {
			this.cursor = this.cursor + 1 % this.queue.length;
		}

		return currentVal;
	}

	hasNext(): boolean {
		return this.queue.length !== 0;
	}
}

