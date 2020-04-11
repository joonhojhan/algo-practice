/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

const Node = function (key, val) {
	this.key = key;
	this.value = val;
	this.prev = null;
	this.next = null;
};

const LRUCache = function (capacity) {
	this.head = new Node(0, 0);
	this.tail = new Node(0, 0);
	this.head.next = this.tail;
	this.tail.prev = this.head;
	this.hash = {};
	this.capacity = 0;
	this.max = capacity;

	this.deleteNode = function (node) {
		node.prev.next = node.next;
		node.next.prev = node.prev;
	};

	this.addToHead = function (node) {
		node.next = this.head.next;
		node.prev = this.head;
		node.next.prev = node;
		this.head.next = node;
	};
};

LRUCache.prototype.get = function (key) {
	if (this.hash[key] !== undefined) {
		this.deleteNode(this.hash[key]);
		this.addToHead(this.hash[key]);
		return this.hash[key].value;
	}
	return -1;
};

LRUCache.prototype.put = function (key, value) {
	if (this.hash[key] !== undefined) {
		this.hash[key].value = value;
		this.deleteNode(this.hash[key]);
		this.addToHead(this.hash[key]);
	} else {
		const node = new Node(key, value);
		if (this.capacity < this.max) {
			this.capacity++;
		} else {
			delete this.hash[this.tail.prev.key];
			this.deleteNode(this.tail.prev);
		}
		this.addToHead(node);
		this.hash[key] = node;
	}
};

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
