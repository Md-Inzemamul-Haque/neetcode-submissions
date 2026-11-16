// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        if(head == null) return null;
        let current = head;
        const randomMap = new Map();

        while(current){
            randomMap.set(current, new Node(current.val));
            current = current.next;
        }

        current = head;
        while(current){
            const clone = randomMap.get(current);

            clone.next = current.next ? randomMap.get(current.next) : null;
            clone.random = current.random ? randomMap.get(current.random) : null;
            current = current.next;
        }

        const [first] = randomMap.values();
        return first;
    }
}
