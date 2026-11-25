class Node {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
    }

    addNode(node) {
        this.head.next.prev = node;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next = node;
    }

    removeNode(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);

            this.removeNode(node);
            this.addNode(node);
            return node.val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let oldNode = this.map.get(key);
        if (oldNode) {
            oldNode.val = value;
            this.removeNode(oldNode);
            this.addNode(oldNode);
        } else {
            if (this.map.size === this.capacity) {
                let leastUsedNode = this.tail.prev;
                this.removeNode(leastUsedNode);
                this.map.delete(leastUsedNode.key);
            }
            const newNode = new Node(key, value);
            this.addNode(newNode);
            this.map.set(key, newNode);
        }
    }
}
