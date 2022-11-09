/**
 * `PlayerQueue` interface for the `Shiritori` class
 * @interface iPlayerQueue
 */
export interface iPlayerQueue<T> {

  /**
   * The number of players in the queue
   */
  size: number;

  /**
   * Returns if the queue is empty
   */
  isEmpty(): boolean;

  /**
   * Attempts to add a player to the queue and returns if the operation was successful
   * @param value - The value to be added to the queue
   */
  enqueue(value: T): boolean;

  /**
   * Attempts to remove a player from the queue and returns if the operation was successful
   * @param value - The value to be removed from the queue
   */
  remove(value: T): boolean;

  /**
   * Gets the current pointed player from the queue and moves the pointer to the next value
   */
  getCurrentPlayer(): T;
  
}
