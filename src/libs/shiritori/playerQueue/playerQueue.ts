import { iPlayerQueue } from ".";

/**
 * `PlayerQueue` class for the `Shiritori` class
 */
export default class PlayerQueue<T> implements iPlayerQueue<T> {
	private data: Array<T>;
	private maxSize: number;
	private front: number;
	
	size: number;

	/**
	 * @param maxSize - Number value indicating the maximum queue size
	 */
	constructor(maxSize: number) {
		if (maxSize <= 0) {
			throw new Error("Invalid max queue size. Max size must be one or greater.");
		}

		this.data = [];
		this.maxSize = maxSize;
		this.size = 0;
		this.front = 0;
	}

	public isEmpty(): boolean {
		return this.size === 0;
	}

	public enqueue(value: T): boolean {
		if (this.size >= this.maxSize) {
			throw new Error("Unable to add to queue. Maximum queue size exceeded.");
		}

		const index = this.data.indexOf(value);

		if (index > -1) {
			return false;
		}

		this.data.push(value);
		this.size++;
		return true;
	}

	public remove(value: T): boolean {
		if (this.isEmpty()) {
			throw new Error("Unable to remove value from queue. Cannot remove from empty queue.");
		}

		const index = this.data.indexOf(value);

		if (index > -1) {
			this.data.splice(index, 1);
			this.size--;
			this.front = this.getNewFrontIndexWithRemovedIndex(index);
			return true;
		}

		return false;
	}

	private getNewFrontIndexWithRemovedIndex(removedIndex: number): number {
		if (this.front === removedIndex) {
			return (this.front) % this.size;
		} else if (this.front > removedIndex) {
			return this.front - 1;
		}

		return this.front;
	}

	public getCurrentPlayer(): T {
		if (this.isEmpty()) {
			throw new Error("Unable to get current player. Cannot get player from empty queue.");
		}

		const value = this.data[this.front];
		this.front = (this.front + 1) % this.size;

		return value;
	}
}
