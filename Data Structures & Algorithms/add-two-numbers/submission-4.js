/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let newNode;
        let head;
        let carry = 0;
        while(l1 && l2){
            const add = l1.val + l2.val + carry;
            const value = add >= 10 ? add%10: (l1.val + l2.val + carry);
            carry = (add >= 10)? 1:0;
            const newValue = new ListNode(value);
            if(!newNode){
                newNode = newValue;
                head = newNode;
            }else{
                newNode.next = newValue;
                newNode = newNode.next;
            }
            l1 = l1.next;
            l2 = l2.next;
        }




        while(l1){
            const add = l1.val + carry;
            const value = add >= 10 ? add%10: (l1.val+carry);
            carry = (add >= 10)? 1:0;
            const newValue = new ListNode(value);
            if(!newNode){
                newNode = newValue;
                head = newNode;
            }else{
                newNode.next = newValue;
                newNode = newNode.next;
            }
            l1 = l1.next;
        }

        while(l2){
            const add = l2.val + carry;
            const value = add >= 10 ? add%10: (l2.val+carry);
            carry = (add >= 10)? 1:0;
            const newValue = new ListNode(value);
            if(!newNode){
                newNode = newValue;
                head = newNode;
            }else{
                newNode.next = newValue;
                newNode = newNode.next;
            }
            l2 = l2.next;
        }

        if(carry>0){
            const newValue = new ListNode(1);
            newNode.next = newValue;
            newNode = newNode.next;
        }

        return head;



    }
}
