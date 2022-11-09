import Player, { User, Computer } from "@libs/shiritori/player";
import PlayerQueue from "@libs/shiritori/playerQueue";

describe("Shiritori library PlayerQueue class tests", () => {
	test("Can add a player to the queue", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(2);
		playerQueue.enqueue(new User("Player 1"));
		playerQueue.enqueue(new Computer("Computer 1"));

		expect(playerQueue.size).toBe(2);
	});

	test("Can get the current player", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(2);
		const user: User = new User("Player 1");
		const computer: Computer = new Computer("Computer 1");

		playerQueue.enqueue(user);
		playerQueue.enqueue(computer);

		expect(playerQueue.getCurrentPlayer()).toBe(user);
		expect(playerQueue.getCurrentPlayer()).toBe(computer);
	});

	test("Can remove a player from the queue", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(4);
		const user1: User = new User("Player 1");
		const user2: User = new User("Player 2");
		const user3: User = new User("Player 3");
		const user4: User = new User("Player 4");

		playerQueue.enqueue(user1);
		playerQueue.enqueue(user2);
		playerQueue.enqueue(user3);
		playerQueue.enqueue(user4);

		expect(playerQueue.size).toBe(4);

		playerQueue.remove(user4);

		expect(playerQueue.size).toBe(3);
		expect(playerQueue.getCurrentPlayer()).toBe(user1);

		playerQueue.remove(user1);

		expect(playerQueue.size).toBe(2);
		expect(playerQueue.getCurrentPlayer()).toBe(user2);

		playerQueue.remove(user3);

		expect(playerQueue.size).toBe(1);
		expect(playerQueue.getCurrentPlayer()).toBe(user2);
	});

	test("Can get if queue is empty", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		expect(playerQueue.isEmpty()).toBe(true);
	});

	test("Can not enqueue duplicates", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(2);
		const user: User = new User("Player 1");

		expect(playerQueue.enqueue(user)).toBe(true);
		expect(playerQueue.size).toBe(1);

		expect(playerQueue.enqueue(user)).toBe(false);
		expect(playerQueue.size).toBe(1);
	});

	test("Can not remove non existent values", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		playerQueue.enqueue(new User("Player 1"));

		expect(playerQueue.remove(new User("Player 2"))).toBe(false);
		expect(playerQueue.size).toBe(1);
	});

	test("Can not get current player from empty queue", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		const getCallback: () => void = () => {
			return () => playerQueue.getCurrentPlayer();
		};

		expect(getCallback()).toThrowError();
	});

	test("Can not remove a player from empty queue", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		const getCallback: () => void = () => {
			return () => playerQueue.remove(new User("Player 1"));
		};

		expect(getCallback()).toThrowError();
	});

	test("Can not create a queue of size 0 or less", () => {
		const getCallback = (size: number): () => PlayerQueue<Player> => {
			return () => new PlayerQueue(size);
		};

		expect(getCallback(0)).toThrowError();
		expect(getCallback(-1)).toThrowError();
	});

	test("Can not add to max size queue", () => {
		const playerQueue: PlayerQueue<Player> = new PlayerQueue(1);
		playerQueue.enqueue(new User("Player 1"));
		const getCallback = (): () => void => {
			return () => playerQueue.enqueue(new Computer("Computer 1"));
		};

		expect(getCallback()).toThrowError();
	});
});
