/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// function mergeTwo(h1, h2) {
//     console.log(h1,h2);
//     // let head = h1;
//     let newNode = new ListNode();
//     while (h1 && h2) {
//         if (h1.val <= h2.val) {
//             newNode = h2;
//             h2 = h2.next;
//             newNode.next = h1.next;
//             h1.next = newNode;
//         }
//         else {
//             newNode = h1;
//             h1 = h1.next;
//             newNode.next = h2.next;
//             h2.next = newNode;
//         }
//     }
// // console.log(head)
//     return head;
// }

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let values = [];

        for (let list of lists) {
            while (list?.val != null) {
                values.push(list.val);
                list = list.next;
            }
        }

        values.sort((a, b) => a - b);
        let node = new ListNode(0);
        let head = node;
        for (const item of values) {
            node.next = new ListNode(item);
            node = node.next;
        }
        return head.next;
    }
}
