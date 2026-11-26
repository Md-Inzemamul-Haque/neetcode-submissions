/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

function mergeTwoLists(list1, list2 = null) {
    const dummy = new ListNode(0, null);
    let node = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }
    if (list1) {
        node.next = list1;
    } else {
        node.next = list2;
    }

    return dummy.next;
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // let length = lists.length;
        let result;
        // if (length == 0) {
        //     result = null;
        // } else if (length == 1) {
        //     result = lists[0];
        // } else {
            while (lists.length > 1) {
                let merged = [];
                for (let i = 0; i < lists.length; i += 2) {
                    merged.push(mergeTwoLists(lists[i], (i+1 < lists.length ? lists[i + 1] : null )));
                }
                lists = merged
            }
            result = lists[0];
        // }
        return result || null;
    }
}
